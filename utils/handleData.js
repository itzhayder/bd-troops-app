const equal = require('fast-deep-equal');

module.exports.handleData = (currData, io, client) => { 
  client.get('data', (err, cacheData) => {
    if (err) throw new Error('there is an error to get data from cache');

    // compare currData and cacheData
    const isEqual = equal(currData, JSON.parse(cacheData)); // returns true or false

    if (!isEqual) {
      // if data are different
      // update cache data
      client.set('data', JSON.stringify(currData), () => {
        console.log('cached Updated'); // debug
      });

      // send fresh or latest data to all connected client
      io.emit('data', currData);
    }
  });
}