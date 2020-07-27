const axios = require('axios');
const { handleData } = require('./handleData');

async function fetchAPI(io, client) {
  console.log('in fetchAPI');

  try {
    // fetch data
    const response = await axios.all([getClanInfo(), getCurrentWar(), getWarLog()]);
    const currData = { clanInfo: response[0].data, currentWar: response[1].data, warlog: response[2].data };

    // compare cache data and current data, and send updated data to client
    handleData(currData, io, client);
  } catch (err) {
    // catch error while fetching
    console.log('there is an error in fetchAPI', err); // debug
  } finally {
    // call fetchAPI every 20 seconds interval
    console.log('------- Finally Run ----------'); // debug
    setTimeout(() => {
      fetchAPI(io, client);
    }, 20000);
  }
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

module.exports = fetchAPI;