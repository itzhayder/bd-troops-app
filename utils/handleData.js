const equal = require('fast-deep-equal');
const { default: currentWar } = require('../client/src/components/currentWar/currentWar');

module.exports.handleData = (prevData, currData, io) => {
  // compare prevData and currentData
  // returns true or false
  const isEqual = equal(currData, prevData);

  if (!isEqual) {
    // update prev data
    // const currDataInString = JSON.stringify(currData);
    // prevData = JSON.parse(currDataInString);
    prevData = currData;
    console.log('previous data updated'); // debug

    // send fresh or updated data to all client
    io.emit('data', currData);
  } else {
    console.log('is EQUAL'); // debug
  }
}