const equal = require('fast-deep-equal');

compareDataAndSet = (data, io, client) => {

  const setDataInCache = (msg) => {
    if (data.key === 'topDonator') {
      data.newData.sort((a, b) => b - a);
    }
    
    client.set(`${data.key}`, JSON.stringify(data.newData), () => {
      console.log(msg);
    });
  }

  // starts here
  client.exist(`${data.key}`, exist => {
    if (exist === 0) {
      setDataInCache(data.message.initial);
      return true; // updated
    } else {
      client.get(`${data.key}`, (err, cacheData) => {
        if (err) throw new Error(`there is an error to get ${data.key} data from cache`);

        const isEqual = equal(data.newData, JSON.parse(cacheData)); // returns true or false

        if (!isEqual) {
          setDataInCache(data.message.updated);
          return true; // updated
        }

        return false; // not updated
      });
    }
  });
}

module.exports = compareDataAndSet;