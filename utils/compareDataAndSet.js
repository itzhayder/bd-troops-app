const equal = require('fast-deep-equal');

const setDataInCache = (data, msg, client, resolve) => {
  client.set(`${data.key}`, JSON.stringify(data.newData), () => {
    console.log(msg);
    return resolve(true); // updated
  });
}


const compareDataAndSet = (data, client) => {
  return new Promise((resolve, reject) => {
    client.get(`${data.key}`, (err, cacheData) => {
      if (err) throw new Error(`there is an error to get ${data.key} data from cache`);
      if (cacheData === null) {
        return setDataInCache(data, data.message.initial, client, resolve);
      }

      const isEqual = equal(data.newData, JSON.parse(cacheData)); // returns true or false

      if (!isEqual) {
        return setDataInCache(data, data.message.updated, client, resolve);
      }

      return resolve(false); // not updated
    });
  });
}

module.exports = compareDataAndSet;
