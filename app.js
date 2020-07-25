const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const axios = require("axios").default;
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const redis = require('redis');
require("dotenv").config();

const { fetchAPI } = require('./utils/fetchAPI');


// ================================================
// initialize the data in cache
// ================================================
const client = redis.createClient();
let isUpdated = false;

client.on('error', err => {
  console.log('Redis client error',err);
});

function startingData() {
  console.log('Started');
  
  fetchAPI.then(data => {
    isUpdated = true;
    client.set('data', JSON.stringify(data), () => {
      console.log('done');
    });
  }).catch(err => {
    console.log('ERROR: ', err);
  })
}
startingData();


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
  
  console.log('new user connected');

  const timer = setInterval(() => {
    // if data updated in cache (redis)
    socket.emit('msg', isUpdated);
    if (isUpdated) {
      client.get('data', (err, data) => {
        if (err) {
          socket.emit('dataPoll', err);
        } else {
          socket.emit('dataPoll', data);
          isUpdated = false;
        }
      });
    }
  }, 5000);

  socket.on('disconnect', () => {
    clearInterval(timer);
    console.log('disconnected');
  })
});


// fetch all url and get the results
app.get("/", (req, res) => {
  client.get('data', (err, data) => {
    if (err) return res.json({status: 'error', err})
    res.json(JSON.parse(data));
  });
});

// if app is in the production
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});