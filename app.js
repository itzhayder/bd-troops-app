const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const redis = require('redis');
const equal = require('fast-deep-equal');
require("dotenv").config();

const { fetchAPI } = require('./utils/fetchAPI');


// ================================================
// initialize the data in cache
// ================================================
const client = redis.createClient();
let cacheUpdated = false;

client.on('error', err => {
  console.log('Redis client error',err);
});

function startingData() {
  console.log('Started');

  const timer = setInterval(() => {
    fetchAPI().then(data => {
      console.log('timer executed...');
      
      client.get('data', (err, cacheData) => {
        if (err) throw new Error('there is an error to get data from cache');

        const isEqual = equal(data, JSON.parse(cacheData));

        if (!isEqual) {
          client.set('data', JSON.stringify(data), () => {
            cacheUpdated = true;
            console.log('cached Updated');
          });
        }

        console.log('isEqual: ', isEqual);
      });

      
    }).catch(err => {
      cacheUpdated = false;
      console.log('ERROR: ', err);
    });
  }, 10000);

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

  socket.on('disconnect', () => {
    console.log('disconnected');
  })
});

setInterval(() => {
  // if data updated in cache (redis)
  // socket.emit('msg', cacheUpdated);
  console.log('----- io.emit run');
  if (cacheUpdated) {
    client.get('data', (err, data) => {
      if (err) {
        io.emit('dataPoll', err);
      } else {
        io.emit('dataPoll', JSON.parse(data));
      }
    });

    cacheUpdated = false;
  }
}, 5000);

// ================================================
// route
// ================================================
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