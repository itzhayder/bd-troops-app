const ClanInfo = require('../models/ClanInfo');
const compareDataAndSet = require('../utils/compareDataAndSet');

exports.clanInfo = async (apiData, client) => {
  try {
    const data = {
      key: 'clanInfo',
      newData: apiData,
      message: {
        initial: 'clanInfo save in cache for the first time',
        updated: 'clanInfo cache updated'
      }
    }
  
    const change = await compareDataAndSet(data, client); // return an object with true (udpated) or false (not udpated)

    console.log('change clanInfo:', change);
  
    if (change === true) {
      apiData.memberList.sort((a, b) => {
        return b.donations - a.donations;
      });
  
      ClanInfo.countDocuments(async (err, count) => {
        if (count <= 0) {
          const savedDoc = await ClanInfo.create(apiData);
          client.set('clanInfoDocId', `${savedDoc._id}`);
          console.log('clanInfo database initial set');
        } else {
          client.get('clanInfoDocId', (err, id) => {
            ClanInfo.update({ _id: id }, apiData, { upsert: true }, (err, raw) => {
              console.log('clanInfo database updated');
            });
          })
        }
      })
    }
  } catch (err) {
    console.log(err);
  }
}