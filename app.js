const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const redis = require('redis');
require("dotenv").config();

const  fetchAPI  = require('./utils/fetchAPI');


// ================================================
// initialize the data in cache
// ================================================
// const client = redis.createClient();
// let cacheUpdated = false;

// client.on('error', err => {
//   console.log('Redis client error',err);
// });


// ================================================
// initialize require variables to run the app
// ================================================
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

let prevData = {};


// ================================================
// middlewars
// ================================================
app.use(cors());
app.use(limiter);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());


// ================================================
// socket.io settings
// ================================================
io.on('connection', socket => {
  console.log('new user connected'); // debug

  socket.on('disconnect', () => {
    console.log('disconnected'); // debug
  });
});


// ================================================
// start fetching when app starts
// ================================================
fetchAPI(prevData, io);


// ================================================
// routes
// ================================================
app.get("/", (req, res) => {
  res.json(prevData);
});


// ================================================
// if app is in the production
// ================================================
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});