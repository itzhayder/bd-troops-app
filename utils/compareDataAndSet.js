const equal = require('fast-deep-equal');

const setDataInCache = (data, msg, client) => {
  client.set(`${data.key}`, JSON.stringify(data.newData), () => {
    console.log(msg);
  });
}


const compareDataAndSet = (data, client) => {
  return new Promise((resolve, reject) => {
    client.exists(`${data.key}`, exist => {
      if (exist === 0) {
        setDataInCache(data, data.message.initial, client);
        resolve(true); // updated
      } else {
        client.get(`${data.key}`, (err, cacheData) => {
          if (err) throw new Error(`there is an error to get ${data.key} data from cache`);
  
          const isEqual = equal(data.newData, JSON.parse(cacheData)); // returns true or false
  
          if (!isEqual) {
            setDataInCache(data, data.message.updated, client);
            resolve(true); // updated
          }
  
          resolve(false); // not updated
        });
      }
    });
  });
}

module.exports = compareDataAndSet;