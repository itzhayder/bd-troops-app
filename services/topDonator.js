const TopDonator = require('../models/TopDonator');

const compareDataAndSet = require('../utils/compareDataAndSet');

// find out top donators in the clan.
exports.topDonator = async (apiData, client) => {
  try {
    const data = {
      key: 'topDonator',
      newData: apiData.memberList,
      message: {
        initial: 'topDonator save in cache for the first time',
        updated: 'topDonator cache updated'
      }
    }
  
    const change = await compareDataAndSet(data, client); // return an object with true (udpated) or false (not udpated)

    console.log('change topDonators:', change);
  
    if (change === true) {
      apiData.memberList.sort((a, b) => {
        return b.donations - a.donations;
      });

      const doc = apiData.memberList.map(member => {
        return {
          tag: member.tag,
          name: member.name,
          donations: member.donations,
          donationsReceived: member.donationsReceived,
        }
      });
  
      TopDonator.countDocuments(async (err, count) => {
        console.log('collection count:', count);
  
        if (count <= 0) {
          const savedDoc = await TopDonator.create({ memberList: doc });
          client.set('topDonatorsDocId', `${savedDoc._id}`);
          console.log('topDonator database initial set');
        } else {
          client.get('topDonatorsDocId', (err, id) => {
            TopDonator.update({ _id: id }, {memberList: doc}, { upsert: true }, (err, raw) => {
              console.log('topDonator database updated');
            });
          })
        }
      })
    }
  } catch (err) {
    console.log(err);
  }
}