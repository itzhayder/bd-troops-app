const mongoose = require('mongoose');
const TopDonator = require('../models/TopDonator');

const compareDataAndSet = require('../utils/compareDataAndSet');

// find out top donators in the clan.

export const topDonator = async ([ memberList ], io, client ) => {
  // memberList.map(member => {
  //   return {
  //     tag: member.tag,
  //     name: member.name,
  //     donations: member.donations,
  //     donationsReceived: member.donationsReceived
  //   }
  // });

  const data = {
    key: 'topDonator',
    newData: memberList,
    message: {
      initial: 'topDonator save in cache for the first time',
      updated: 'topDonator cache updated'
    }
  }

  const check = compareDataAndSet(data, io, client); // return an object with true (udpated) or false (not udpated)

  if (check.change === true) {
    const doc = check.memberList.map(member => {
      return {
        tag: member.tag,
        name: member.name,
        donations: member.donations,
        donationsReceived: member.donationsReceived,
      }
    });

    // first time save
    if (TopDonator.count <= 0) {
      const savedDoc = await TopDonator.create(doc);
      client.set('topDonatorsDocId', `${savedDoc._id}`);
    } else {
      client.get('topDonatorsDocId', (err, id) => {
        TopDonator.update({ _id: id }, doc, { upsert: true });
      })
    }
  }
}



// memberList = [
//   {
//     tag:"#9Q9C8YQL",
//     name:"Abìd MD FaHím",
//     donations: 1244,
//     donationsReceived: 3183,
//   }
// ]



  // let isUpdated = false;

  // const sortAndSet = (msg) => {
  //   memberList.sort((a, b) => b - a);
  //   client.set('topDonator', JSON.stringify(memberList), () => {
  //     console.log(msg);
  //     isUpdated = true;
  //   });
  // }

  // client.exists('topDonator', exist => {
  //   if (exist === 0) {
  //     sortAndSet('topDonator set for the first time!');
  //   } else {
  //     client.get('topDonator', (err, cacheData) => {
  //       if (err) throw new Error('there is an error to get topDonator data from cache');

  //       const isEqual = equal(memberList, JSON.parse(cacheData)); // returns true or false

  //       if (!isEqual) {
  //         sortAndSet('topDonator updated!');

  //         io.emit('topDonatorSubscribe', memberList);
  //       }
  //     });
  //   }
  // });
  