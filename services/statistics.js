const compareDataAndSet = require('../utils/compareDataAndSet');


// find out top donators in the clan.

export const statistics = ([ memberList ], io, client ) => {
  memberList.map(member => {
    return {
      tag: member.tag,
      name: member.name,
      donations: member.donations,
      donationsReceived: member.donationsReceived
    }
  });

  const data = {
    key: 'topDonator',
    newData: memberList,
    message: {
      initial: 'topDonator save in cache for the first time',
      updated: 'topDonator cache updated'
    }
  }

  compareDataAndSet(data, io, client);
}