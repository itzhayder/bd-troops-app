const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const mongoose = require('mongoose');
const keys = require('./config/keys');


// ================================================
// initialize require variables to run the app
// ================================================
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

const PORT = process.env.PORT || 5000;

// listening the app on given port. ex: http://localhost:port
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


// ================================================
// middlewars
// ================================================
// app.use(cors()); // give access to all domain
app.use(limiter); // limit request for an IP address
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://bd-troops.herokuapp.com/');
  next();
});


// ================================================
// socket.io settings
// ================================================
io.on('connection', socket => {
  console.log('new user connected'); // debug

  socket.on('disconnect', () => {
    console.log('user disconnected'); // debug
  });
});


// ================================================
// mongodb database connection
// ================================================
mongoose.connect(keys.MONGODB_URI, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if (err) {
    console.log(err);
  }
  console.log('database connected');
});

// look for update in database and pass (emit) it to frontend by socket 
const connection = mongoose.connection;

connection.once('open', () => {
  const claninfos = connection.collection('claninfos').watch();
  const currentwars = connection.collection('currentwars').watch();

  claninfos.on('change', change => {
    if (change.operationType === 'update') {
      io.emit('claninfos', change.updateDescription.updatedFields);
    }
  });

  currentwars.on('change', change => {
    if (change.operationType === 'update') {
      io.emit('currentwars', change.updateDescription.updatedFields);
    }
  });
});


// ================================================
// routes
// ================================================
app.get("/api", (req, res) => {
  const data = {};

  connection.collection('claninfos').find({}).toArray((err, result) => {
    data.clanInfo = result[0];

    connection.collection('currentwars').find({}).toArray((err, result) => {
      data.currentWar = result[0];
      res.json(data);
    });
  });
});




// ================================================
// if app is in the production
// ================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
