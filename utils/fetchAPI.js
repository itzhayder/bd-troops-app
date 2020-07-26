const axios = require('axios');

module.exports.fetchAPI = () => {
  console.log('in fetchAPI');
  return new Promise((resolve, reject) => {
    axios
      .all([getClanInfo(), getCurrentWar(), getWarLog()])
      .then(
        axios.spread((clanInfo, currentWar, warlog) => {
          console.log('data fetched in fetchAPI');
          // console.log(clanInfo.data);
          const result = { 
            clanInfo: clanInfo.data, 
            currentWar: currentWar.data,
            warlog: warlog.data
          };

          resolve(result);
          // res.setHeader("Content-Type", "application/json");
          // res.json({
          //   clanInfo: clanInfo.data,
          //   currentWar: currentWar.data,
          //   warlog: warlog.data,
          // });
        })
      )
      .catch((err) => {
        console.log('there is an error in fetchAPI');
        reject(err);
        // res.json({
        //   status: "error",
        //   code: err.code,
        //   err: err,
        // });
      });
  })
}

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