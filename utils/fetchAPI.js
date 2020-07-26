const axios = require('axios');
const { handleData } = require('./handleData');

async function fetchAPI(prevData, io) {
  console.log('in fetchAPI');

  try {
    // fetch data
    const response = await axios.all([getClanInfo(), getCurrentWar(), getWarLog()]);
    const currData = { clanInfo: response[0].data, currentWar: response[1].data, warlog: response[2].data };

    // compare previous and current data, and send updated data to client
    handleData(prevData, currData, io);
  } catch (err) {
    // catch error while fetching
    console.log('there is an error in fetchAPI', err); // debug
  } finally {
    // call fetchAPI every 10 seconds interval
    console.log('------- Finally ----------'); // debug
    setTimeout(() => {
      fetchAPI(prevData, io);
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