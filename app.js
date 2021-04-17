const express = require("express");
const http = require('http');
const cors = require("cors");
const mongoose = require('mongoose');
const rateLimit = require("express-rate-limit");
const redis = require('redis');

const keys = require('./config/keys');
const  fetchAPI  = require('./utils/fetchAPI');


// ================================================
// initialize redis
// ================================================
const client = redis.createClient();

client.select(process.env.DB_INDEX, (err, msg) => {
  console.log('redis client is on database no. :', msg);
});

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
mongoose.connect(keys.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  console.log('database connected');
});


// listening the app on given port. ex: http://localhost:port
server.listen(PORT, () => {
  console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}...`);
});
