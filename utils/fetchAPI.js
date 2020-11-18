const axios = require('axios');
const keys = require('../config/keys');
const clanInfo = require('../services/clanInfo');
const currentWar = require('../services/currentWar');


async function fetchAPI(client) {
  console.log('in fetchAPI');

  try {
    // fetch data
    const response = await axios.all([getClanInfo(), getCurrentWar(), getWarLog()]);
    const currData = { clanInfo: response[0].data, currentWar: response[1].data, warlog: response[2].data };

    // compare cache data and current data, and send updated data to client
    clanInfo(currData.clanInfo, client);
    currentWar(currData.currentWar, client);
  } catch(err) {
    // catch error while fetching
    console.log('there is an error in fetchAPI', err); // debug
  } finally {
    // call fetchAPI (do the same process) every 30 seconds interval
    console.log('------- in Finally ----------'); // debug

    setTimeout(() => {
      fetchAPI(client);
    }, process.env.TIMEOUT || 30000);
  }
}

// get clan info from api
function getClanInfo() {
  return axios({
    method: "get",
    url: keys.URL,
    headers: {
      authorization: `Bearer ${keys.API_TOKEN}`,
      "content-type": "application/json",
    },
  });
}

// get current war from api
function getCurrentWar() {
  return axios({
    method: "get",
    url: keys.URL + "/currentwar",
    headers: {
      authorization: `Bearer ${keys.API_TOKEN}`,
      "content-type": "application/json",
    },
  });
}

// get warlog from api
function getWarLog() {
  return axios({
    method: "get",
    url: keys.URL + "/warlog",
    headers: {
      authorization: `Bearer ${keys.API_TOKEN}`,
      "content-type": "application/json",
    },
  });
}

module.exports = fetchAPI;
