const express = require("express");
const axios = require("axios").default;
const cors = require("cors");
const path = require("path");
const clashAPi = require("clash-of-clans-api");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewars

app.use(cors());
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
        reason: "accessDenied",
        err: err,
      });
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});