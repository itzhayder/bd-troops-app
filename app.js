const express = require("express");
const axios = require("axios").default;
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
// const clashAPi = require("clash-of-clans-api");


const app = express();
const PORT = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// middlewars

app.use(cors());
app.use(limiter);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// -------------------------------

// const client = clashAPi({
//   token: process.env.COC_API_TOKEN,
//   request: "https://api.clashofclans.com/v1/",
// });

// app.get("/", (req, res, next) => {
//   client
//     .clanWarlogByTag("#QVUPC08")
//     .then((data) => res.send(data))
//     .catch((err) => console.log(err));
// });

// -------------------------------


// API - get json data

// get clan info from api
function getClanInfo() {
  return axios({
    method: "get",
    url: process.env.URL,
    headers: {
      authorization: `Bearer ${process.env.API_TOKEN}`,
      "content-type": "application/json",
    },
  });
}

// get current war from api
function getCurrentWar() {
  return axios({
    method: "get",
    url: process.env.URL + "/currentwar",
    headers: {
      authorization: `Bearer ${process.env.API_TOKEN}`,
      "content-type": "application/json",
    },
  });
}

// get warlog from api
function getWarLog() {
  return axios({
    method: "get",
    url: process.env.URL + "/warlog",
    headers: {
      authorization: `Bearer ${process.env.API_TOKEN}`,
      "content-type": "application/json",
    },
  });
}

// fetch all url and get the results
app.get("/", (req, res, next) => {
  axios
    .all([getClanInfo(), getCurrentWar(), getWarLog()])
    .then(
      axios.spread((clanInfo, currentWar, warlog) => {
        res.setHeader("Content-Type", "application/json");
        res.json({
          clanInfo: clanInfo.data,
          currentWar: currentWar.data,
          warlog: warlog.data,
        });
      })
    )
    .catch((err) => {
      res.send({
        status: "error",
        err: err,
      });
    });
});

// if app is in the production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});