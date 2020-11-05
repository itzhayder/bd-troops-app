const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const cors = require("cors");
const mongoose = require('mongoose');
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
// start fetching data when app starts
// ================================================
fetchAPI(client);


// ================================================
// connect mongodb
// ================================================
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  console.log('database connected');
});


// listening the app on given port. ex: http://localhost:port
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});