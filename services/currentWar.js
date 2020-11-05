const CurrentWar = require('../models/CurrentWar');
const compareDataAndSet = require('../utils/compareDataAndSet');

const currentWar = async (apiData, client) => {
  try {
    const data = {
      key: 'currentWar',
      newData: apiData,
      message: {
        initial: 'currentWar save in cache for the first time',
        updated: 'currentWar cache updated'
      }
    }
  
    const change = await compareDataAndSet(data, client); // return an object with true (udpated) or false (not udpated)

    console.log('change currentWar:', change);
  
    if (change === true) {
      delete apiData.clan.members;
      delete apiData.opponent.members;
      apiData.updatedAt = new Date().toLocaleString();
  
      CurrentWar.countDocuments(async (err, count) => {
        if (count <= 0) {
          const savedDoc = await CurrentWar.create(apiData);
          client.set('currentWarDocId', `${savedDoc._id}`);
          console.log('currentWar database initial set');
        } else {
          client.get('currentWarDocId', (err, id) => {
            CurrentWar.update({ _id: id }, apiData, { upsert: true }, (err, raw) => {
              console.log('currentWar database updated');
            });
          })
        }
      })
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = currentWar;