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
// initialize redis
// ================================================
const client = redis.createClient();

client.on('error', err => {
  console.log('Redis client error',err);
});


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


// ================================================
// middlewars
// ================================================
app.use(cors()); // give access to all domain
app.use(limiter); // limit request for an IP address
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
// start fetching data when app starts
// ================================================
fetchAPI(io, client);


// ================================================
// routes
// ================================================
app.get("/", (req, res) => {
  client.get('data', (err, cacheData) => {
    if (err) return res.json({status: 'error', err});

    res.json(JSON.parse(cacheData));
  });
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

// listening the app on given port. ex: http://localhost:port
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});