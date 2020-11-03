exports.currentWar = {
  state: 'warEnded', // inWar = Battle Day, notInWar = No War, warEnded = No War, default = War Details
  teamSize: 10,
  preparationStartTime: "20201012T045009.000Z",
  startTime: "20201013T063601.000Z",
  endTime: "20201014T065818.000Z",

  clan: {
    name: 'BD.troops',
    badgeUrls:{
      small: "https://api-assets.clashofclans.com/badges/70/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png",
      medium: "https://api-assets.clashofclans.com/badges/200/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png"
    },
    clanLevel: 14,
    attacks: 16,
    stars: 23,
    destructionPercentage: 82.7,
    members: [
      {
        "tag":"#88JY8PJGJ",
        "name":"M H S",
        "townhallLevel":12,
        "mapPosition":5,
        "opponentAttacks":1,
        "bestOpponentAttack":{
          "attackerTag":"#90RRGLJRL",
          "defenderTag":"#88JY8PJGJ",
          "stars":3,
          "destructionPercentage":100,
          "order":9
        }
      },
      {
        "tag":"#9L8VJ92C",
        "name":"Sultan Al Hasan",
        "townhallLevel":12,
        "mapPosition":3,
        "attacks":[
          {
            "attackerTag":"#9L8VJ92C",
            "defenderTag":"#8JQ9QCRQL",
            "stars":1,
            "destructionPercentage":79,
            "order":6
          },
          {
            "attackerTag":"#9L8VJ92C",
            "defenderTag":"#YUL2YLU2J",
            "stars":1,
            "destructionPercentage":51,
            "order":16
          }
        ],
        "opponentAttacks":2,
        "bestOpponentAttack":{
          "attackerTag":"#8JQ9QCRQL",
          "defenderTag":"#9L8VJ92C",
          "stars":2,
          "destructionPercentage":91,
          "order":17
        }
      }
    ]
  },

  opponent: {
    name: "♥️MY MELISSA ♥️",
    badgeUrls:{
      small:"https://api-assets.clashofclans.com/badges/70/HF7jtXF4sh9zzc2wC14M3QSIpvAdSBTpVz4Xqc50lk8.png",
      medium:"https://api-assets.clashofclans.com/badges/200/HF7jtXF4sh9zzc2wC14M3QSIpvAdSBTpVz4Xqc50lk8.png"
    },
    clanLevel: 12,
    attacks: 17,
    stars: 24,
    destructionPercentage: 86.4,
    members: [
      {
        "tag":"#8JQ9QCRQL",
        "name":"Amante d tú hna",
        "townhallLevel":13,
        "mapPosition":3,
        "attacks":[
          {
            "attackerTag":"#8JQ9QCRQL",
            "defenderTag":"#2UPL0PRP2",
            "stars":3,
            "destructionPercentage":100,
            "order":14
          },
          {
            "attackerTag":"#8JQ9QCRQL",
            "defenderTag":"#9L8VJ92C",
            "stars":2,
            "destructionPercentage":91,
            "order":17
          }
        ],
        "opponentAttacks":2,
        "bestOpponentAttack":{
          "attackerTag":"#LLPRVJGR",
          "defenderTag":"#8JQ9QCRQL",
          "stars":3,
          "destructionPercentage":100,
          "order":7
        }
      },
      {
        "tag":"#YUL2YLU2J",
        "name":"♠️EL PRINCIPE ♠",
        "townhallLevel":11,
        "mapPosition":7,
        "attacks":[
          {
            "attackerTag":"#YUL2YLU2J",
            "defenderTag":"#VUR8LU2Y",
            "stars":3,
            "destructionPercentage":100,
            "order":23
          },
          {
            "attackerTag":"#YUL2YLU2J",
            "defenderTag":"#9Q9C8YQL",
            "stars":0,
            "destructionPercentage":34,
            "order":29
          }
        ],
        "opponentAttacks":2,
        "bestOpponentAttack":{
          "attackerTag":"#8CJ9J28VU",
          "defenderTag":"#YUL2YLU2J",
          "stars":2,
          "destructionPercentage":79,
          "order":1
        }
      }
    ]
  }
}

exports.clanInfo = {
  tag:"#QVUPC08",
  name:"BD.troops",
  description:"Use both attacks significantly or stay away from war. Happy clashing Trophy push on.... NEVER GIVE UP💪💪. STAY HOME, SAVE LIVES",
  location:{
    "id":32000026,
    "name":"Bangladesh",
    "isCountry":true,
    "countryCode":"BD"
  },
  warWins:345,
  warTies:9,
  warLosses:177,
  members:43,
  memberList: [
    {
      tag:"#9Q9C8YQL",
      name:"Abìd MD FaHím",
      role:"coLeader",
      expLevel:182,
      league: {
        id:29000018,
        name:"Champion League I",
        iconUrls: {
          small:"https://api-assets.clashofclans.com/leagues/72/9v_04LHmd1LWq7IoY45dAdGhrBkrc2ZFMZVhe23PdCE.png",
          tiny:"https://api-assets.clashofclans.com/leagues/36/9v_04LHmd1LWq7IoY45dAdGhrBkrc2ZFMZVhe23PdCE.png",
          medium:"https://api-assets.clashofclans.com/leagues/288/9v_04LHmd1LWq7IoY45dAdGhrBkrc2ZFMZVhe23PdCE.png"
        }
      },
      trophies: 3803,
      versusTrophies: 3682,
      clanRank: 1,
      previousClanRank: 2,
      donations: 1244,
      donationsReceived: 3183
    }
  ],
  warLeague:{
    id:48000009,
    name:"Gold League I"
  },
}