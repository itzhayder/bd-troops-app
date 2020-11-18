const ClanInfo = require('../models/ClanInfo');
const compareDataAndSet = require('../utils/compareDataAndSet');

const clanInfo = async (apiData, client) => {
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

      apiData.updatedAt = new Date().toLocaleString();

      ClanInfo.countDocuments(async (err, count) => {
        if (count <= 0) { // document doesn't exist in database
          const savedDoc = await ClanInfo.create(apiData);
          client.set('clanInfoDocId', `${savedDoc._id}`);
          console.log('clanInfo database initial set');
        } else { // document exist in database
          client.get('clanInfoDocId', async (err, id) => {
            if (id === null) {
              const resultDocs = await ClanInfo.find({});
              client.set('clanInfoDocId', `${resultDocs[0]._id}`);

              ClanInfo.updateOne({ _id: resultDocs[0]._id }, apiData, { upsert: true }, (err, raw) => {
                console.log('clanInfo database updated');
              });
            } else {
              ClanInfo.updateOne({ _id: id }, apiData, { upsert: true }, (err, raw) => {
                console.log('clanInfo database updated');
              });
            }
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = clanInfo;
