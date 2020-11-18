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

exports.leagueGroup = {
  "state": "inWar",
  "season": "2020-11",
  "clans": [
    {
      "tag": "#2PLR02Y89",
      "name": "Dark Alliance",
      "clanLevel": 5,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/YM9o6BsRdE5jyJCfuOsIj6SsIvrszd70gQQV7JTzl6E.png",
        "large": "https://api-assets.clashofclans.com/badges/512/YM9o6BsRdE5jyJCfuOsIj6SsIvrszd70gQQV7JTzl6E.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/YM9o6BsRdE5jyJCfuOsIj6SsIvrszd70gQQV7JTzl6E.png"
      },
      "members": [
        {
          "tag": "#8P9RLJ0Y",
          "name": "mizzuz",
          "townHallLevel": 12
        },
        {
          "tag": "#JG02JYG",
          "name": "felix",
          "townHallLevel": 8
        },
        {
          "tag": "#YVRQR28J2",
          "name": "gusyyy_3_",
          "townHallLevel": 9
        },
        {
          "tag": "#P0GP0VVP2",
          "name": "Alicia",
          "townHallLevel": 10
        },
        {
          "tag": "#9YGYRC89Y",
          "name": "Sullastiger",
          "townHallLevel": 13
        },
        {
          "tag": "#8QUQL8GRC",
          "name": "H-Man",
          "townHallLevel": 9
        },
        {
          "tag": "#VC8C2VCJ",
          "name": "xavesc22",
          "townHallLevel": 11
        },
        {
          "tag": "#9QUVJJQ8J",
          "name": "Acevedo",
          "townHallLevel": 11
        },
        {
          "tag": "#8JQ0LJ8QG",
          "name": "MaxPower5(2)",
          "townHallLevel": 11
        },
        {
          "tag": "#2RG8GVRY",
          "name": "XxRodrIxX",
          "townHallLevel": 10
        },
        {
          "tag": "#CJY2L0QY",
          "name": "Minoslo",
          "townHallLevel": 11
        },
        {
          "tag": "#YQ0JP0J0Q",
          "name": "Dario",
          "townHallLevel": 11
        },
        {
          "tag": "#2PGPLR89",
          "name": "Rafots",
          "townHallLevel": 11
        },
        {
          "tag": "#209G9RC8",
          "name": "DROGON",
          "townHallLevel": 8
        },
        {
          "tag": "#LP82992VJ",
          "name": "MiniS3rgi21",
          "townHallLevel": 6
        },
        {
          "tag": "#2C9989JGL",
          "name": "Álvaro8",
          "townHallLevel": 10
        },
        {
          "tag": "#2QQJQGGVY",
          "name": "DEATHPOOL",
          "townHallLevel": 10
        },
        {
          "tag": "#2L2J8298R",
          "name": "MiguelMt",
          "townHallLevel": 11
        },
        {
          "tag": "#C82JLRCL",
          "name": "Sergii21",
          "townHallLevel": 12
        }
      ]
    },
    {
      "tag": "#Y8JRP28V",
      "name": "Arkanovi tigrov",
      "clanLevel": 13,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/LK7ENN5uqZBwieBTTexg2lfO-K1uU-Y_1U8ybIh9T3Y.png",
        "large": "https://api-assets.clashofclans.com/badges/512/LK7ENN5uqZBwieBTTexg2lfO-K1uU-Y_1U8ybIh9T3Y.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/LK7ENN5uqZBwieBTTexg2lfO-K1uU-Y_1U8ybIh9T3Y.png"
      },
      "members": [
        {
          "tag": "#U9GVV2RG",
          "name": "Fipa",
          "townHallLevel": 13
        },
        {
          "tag": "#9QP8Y89J",
          "name": "Nepobedivi 02",
          "townHallLevel": 10
        },
        {
          "tag": "#YRJGQVRG2",
          "name": "СРЁГА",
          "townHallLevel": 10
        },
        {
          "tag": "#2QRUUPGPR",
          "name": "LokSat",
          "townHallLevel": 10
        },
        {
          "tag": "#PCY9JPVL",
          "name": "MisoClashKing",
          "townHallLevel": 10
        },
        {
          "tag": "#L908RRUCQ",
          "name": "Ognjenyoutube",
          "townHallLevel": 12
        },
        {
          "tag": "#2PLLRRPP9",
          "name": "$tefan^3",
          "townHallLevel": 11
        },
        {
          "tag": "#LG8CJJU9C",
          "name": "Mercedes-Benz",
          "townHallLevel": 9
        },
        {
          "tag": "#8QLPY9YQQ",
          "name": "somi",
          "townHallLevel": 11
        },
        {
          "tag": "#GULQVVPV",
          "name": "Јебач ❤❤❤",
          "townHallLevel": 11
        },
        {
          "tag": "#V0CR9PPC",
          "name": "miho",
          "townHallLevel": 12
        },
        {
          "tag": "#P9C0R08V",
          "name": "XNn",
          "townHallLevel": 10
        },
        {
          "tag": "#92UV908GL",
          "name": "Gaga junior",
          "townHallLevel": 11
        },
        {
          "tag": "#C9JJY2PC",
          "name": "Shomy",
          "townHallLevel": 12
        },
        {
          "tag": "#JYYPRYU",
          "name": "Jeff the killer",
          "townHallLevel": 10
        },
        {
          "tag": "#GC988P9R",
          "name": "BambiniMihac :)",
          "townHallLevel": 10
        },
        {
          "tag": "#YPJY9GJUY",
          "name": "Vlada",
          "townHallLevel": 13
        },
        {
          "tag": "#GPY29J0L",
          "name": "Gaga144",
          "townHallLevel": 12
        },
        {
          "tag": "#29V9QQYRQ",
          "name": "ŽELJKO :D",
          "townHallLevel": 11
        },
        {
          "tag": "#9PQQPV99",
          "name": "Dragon Lord",
          "townHallLevel": 11
        },
        {
          "tag": "#UGPP8JL0",
          "name": "_stefan_xD :)",
          "townHallLevel": 10
        },
        {
          "tag": "#92Y8JPR9P",
          "name": "Miso 2",
          "townHallLevel": 9
        },
        {
          "tag": "#P9LVUVUC",
          "name": "Рус Добровољац",
          "townHallLevel": 11
        },
        {
          "tag": "#YRLCJV0G0",
          "name": "Нссловаријск",
          "townHallLevel": 12
        },
        {
          "tag": "#9CCURVJ08",
          "name": "GhostlyxD",
          "townHallLevel": 11
        },
        {
          "tag": "#P090QQ00L",
          "name": "Raptor",
          "townHallLevel": 10
        },
        {
          "tag": "#P0C0RVJ08",
          "name": "StefanK005",
          "townHallLevel": 9
        }
      ]
    },
    {
      "tag": "#82Q2P8YC",
      "name": "FIXSYUS",
      "clanLevel": 14,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/KM41-WyrqmjhlKCXhqMoqa_eLnrkwT1LBWdAa19umDg.png",
        "large": "https://api-assets.clashofclans.com/badges/512/KM41-WyrqmjhlKCXhqMoqa_eLnrkwT1LBWdAa19umDg.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/KM41-WyrqmjhlKCXhqMoqa_eLnrkwT1LBWdAa19umDg.png"
      },
      "members": [
        {
          "tag": "#PRPYYUPJ",
          "name": "ronaldo7",
          "townHallLevel": 10
        },
        {
          "tag": "#UP2V89VG",
          "name": "KarLy BoO :)",
          "townHallLevel": 10
        },
        {
          "tag": "#Q8G922C",
          "name": "mikebass",
          "townHallLevel": 13
        },
        {
          "tag": "#9UULYP0L",
          "name": "Joseibz",
          "townHallLevel": 11
        },
        {
          "tag": "#8RQC8GYGV",
          "name": "John cena xd",
          "townHallLevel": 9
        },
        {
          "tag": "#2RCR8RU2V",
          "name": "Periwinquel",
          "townHallLevel": 11
        },
        {
          "tag": "#LQYR9C9L0",
          "name": "erik.u.s.",
          "townHallLevel": 6
        },
        {
          "tag": "#8QLPG0LJU",
          "name": "ARLON DUARTE",
          "townHallLevel": 12
        },
        {
          "tag": "#2YJV9PVUG",
          "name": "ebussus",
          "townHallLevel": 11
        },
        {
          "tag": "#PPLY289U",
          "name": "gonzo",
          "townHallLevel": 12
        },
        {
          "tag": "#90YG2LGGC",
          "name": "CL-McWeed",
          "townHallLevel": 10
        },
        {
          "tag": "#CU0PY9QV",
          "name": "el castillo pod",
          "townHallLevel": 13
        },
        {
          "tag": "#U00VJLG0",
          "name": "ALEXOON",
          "townHallLevel": 13
        },
        {
          "tag": "#8YUVYRVRP",
          "name": "@Lb€RT",
          "townHallLevel": 11
        },
        {
          "tag": "#2VPVV89V",
          "name": "Mittany",
          "townHallLevel": 11
        },
        {
          "tag": "#QCGV0YLL",
          "name": "mr ko",
          "townHallLevel": 13
        },
        {
          "tag": "#998LVVQV",
          "name": "☆ Uriel ☆",
          "townHallLevel": 13
        }
      ]
    },
    {
      "tag": "#QVUPC08",
      "name": "BD.troops",
      "clanLevel": 14,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png",
        "large": "https://api-assets.clashofclans.com/badges/512/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png"
      },
      "members": [
        {
          "tag": "#9Q9C8YQL",
          "name": "Abìd MD FaHím",
          "townHallLevel": 13
        },
        {
          "tag": "#2208GGPJ8",
          "name": "Hossain",
          "townHallLevel": 10
        },
        {
          "tag": "#LQQGQPUC2",
          "name": "DJ",
          "townHallLevel": 9
        },
        {
          "tag": "#LLPRVJGR",
          "name": "Shaikat",
          "townHallLevel": 13
        },
        {
          "tag": "#Q20JCCYJL",
          "name": "∆ (4)",
          "townHallLevel": 3
        },
        {
          "tag": "#LUU0J8QVJ",
          "name": "∆ (3)",
          "townHallLevel": 3
        },
        {
          "tag": "#Q0PCRQ2P9",
          "name": "∆ (1)",
          "townHallLevel": 3
        },
        {
          "tag": "#LC999VQJ8",
          "name": "TGS•NITIN",
          "townHallLevel": 5
        },
        {
          "tag": "#LU2LLV28G",
          "name": "AmarMathaNoshto",
          "townHallLevel": 3
        },
        {
          "tag": "#VJGUCULL",
          "name": "Bad Warrior",
          "townHallLevel": 13
        },
        {
          "tag": "#LUCLQPGUV",
          "name": "AmarMatha",
          "townHallLevel": 3
        },
        {
          "tag": "#2UPL0PRP2",
          "name": "AsiF II",
          "townHallLevel": 12
        },
        {
          "tag": "#2RGU8YRRY",
          "name": "HEEM",
          "townHallLevel": 10
        },
        {
          "tag": "#RVPRLCJJ",
          "name": "NEOX",
          "townHallLevel": 10
        },
        {
          "tag": "#LCV2LYVRU",
          "name": "∆ (5)",
          "townHallLevel": 3
        },
        {
          "tag": "#LCULLUUPC",
          "name": "Markanne",
          "townHallLevel": 4
        },
        {
          "tag": "#8VGQU80QQ",
          "name": "hikaru",
          "townHallLevel": 8
        },
        {
          "tag": "#LV98CQRR8",
          "name": "se7en",
          "townHallLevel": 3
        },
        {
          "tag": "#LJPGJLP2Q",
          "name": "Co-leader",
          "townHallLevel": 9
        },
        {
          "tag": "#LGJUPRPJP",
          "name": "zkr",
          "townHallLevel": 11
        },
        {
          "tag": "#LCV2PV22U",
          "name": "∆(2)",
          "townHallLevel": 3
        },
        {
          "tag": "#PLLQPLR0",
          "name": "$675$",
          "townHallLevel": 13
        },
        {
          "tag": "#YY8Y0YJV0",
          "name": "Mahruf Saad",
          "townHallLevel": 10
        },
        {
          "tag": "#LQ9CY2RP9",
          "name": "seneth nimsara",
          "townHallLevel": 4
        },
        {
          "tag": "#LUPULR9RY",
          "name": "rush",
          "townHallLevel": 4
        },
        {
          "tag": "#LR9Y2Y00Q",
          "name": "LoL :o",
          "townHallLevel": 7
        },
        {
          "tag": "#9L8VJ92C",
          "name": "Sultan Al Hasan",
          "townHallLevel": 12
        },
        {
          "tag": "#UPU99C00",
          "name": "∆zi",
          "townHallLevel": 11
        },
        {
          "tag": "#LR90LRYQR",
          "name": "Vansh Oza",
          "townHallLevel": 7
        },
        {
          "tag": "#9RUR098Y8",
          "name": "★675★",
          "townHallLevel": 4
        },
        {
          "tag": "#8CJ9J28VU",
          "name": "afs",
          "townHallLevel": 11
        },
        {
          "tag": "#80C80JVQ2",
          "name": "**WaLL-E**",
          "townHallLevel": 10
        },
        {
          "tag": "#VUR8LU2Y",
          "name": "hayder",
          "townHallLevel": 11
        },
        {
          "tag": "#2Q0PQGGV2",
          "name": "675 jr",
          "townHallLevel": 9
        },
        {
          "tag": "#88JY8PJGJ",
          "name": "M H S",
          "townHallLevel": 12
        },
        {
          "tag": "#YU80QUPU2",
          "name": "ONE MAN ARMY",
          "townHallLevel": 9
        },
        {
          "tag": "#82CJGQGQ9",
          "name": "mhshakil09",
          "townHallLevel": 11
        },
        {
          "tag": "#V2G2U0VR",
          "name": "AsiF",
          "townHallLevel": 11
        },
        {
          "tag": "#2GLJQVJQU",
          "name": "shakil",
          "townHallLevel": 12
        },
        {
          "tag": "#Q092Y0YRY",
          "name": "M R MOTIN",
          "townHallLevel": 8
        },
        {
          "tag": "#LQJ82JG9U",
          "name": "€£¥",
          "townHallLevel": 5
        },
        {
          "tag": "#VU9UJ0Q",
          "name": "TOUFIQ",
          "townHallLevel": 11
        },
        {
          "tag": "#892YCGVUJ",
          "name": "NADIM_MAHMUD",
          "townHallLevel": 11
        }
      ]
    },
    {
      "tag": "#28CJJQ2PJ",
      "name": "❤قياصرة✴حماه❤",
      "clanLevel": 7,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/uovBCE1N2r1Y5Poo4ek0zshmoCFfzFsd2wYWpX5pNL0.png",
        "large": "https://api-assets.clashofclans.com/badges/512/uovBCE1N2r1Y5Poo4ek0zshmoCFfzFsd2wYWpX5pNL0.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/uovBCE1N2r1Y5Poo4ek0zshmoCFfzFsd2wYWpX5pNL0.png"
      },
      "members": [
        {
          "tag": "#Y2L8G2CCJ",
          "name": "abeer",
          "townHallLevel": 10
        },
        {
          "tag": "#PJ8JQ282G",
          "name": "zz",
          "townHallLevel": 13
        },
        {
          "tag": "#Q09CV02YY",
          "name": "محمد",
          "townHallLevel": 7
        },
        {
          "tag": "#LUJV8GYVR",
          "name": "المدمر",
          "townHallLevel": 6
        },
        {
          "tag": "#YRL8Y0LLP",
          "name": "لا ياصديقي",
          "townHallLevel": 11
        },
        {
          "tag": "#YG28PU08P",
          "name": "بسمة وطن R~G",
          "townHallLevel": 10
        },
        {
          "tag": "#98P980VYC",
          "name": "♡☆حماه❤العز☆♡",
          "townHallLevel": 11
        },
        {
          "tag": "#280UGG98J",
          "name": "الـقيصر الـسوري",
          "townHallLevel": 11
        },
        {
          "tag": "#YPGP2URP0",
          "name": "وردة حماه",
          "townHallLevel": 10
        },
        {
          "tag": "#8CCYC00V0",
          "name": "اية",
          "townHallLevel": 11
        },
        {
          "tag": "#PL2PLUYCU",
          "name": "القيصر الحموي",
          "townHallLevel": 10
        },
        {
          "tag": "#YRLUG2YV2",
          "name": "حسين ابو حسن",
          "townHallLevel": 11
        },
        {
          "tag": "#YJCQRLYCL",
          "name": "❤آٍزُعِرٍ حماة❤",
          "townHallLevel": 13
        },
        {
          "tag": "#Y9R9JYC92",
          "name": "✴فداء✴",
          "townHallLevel": 12
        },
        {
          "tag": "#PGUQVYUY8",
          "name": "✌الحموي❤الحر✌",
          "townHallLevel": 12
        },
        {
          "tag": "#LUU28RGGC",
          "name": "Queen",
          "townHallLevel": 5
        },
        {
          "tag": "#PJVYGRGYQ",
          "name": "♡حنين الروح♡",
          "townHallLevel": 8
        },
        {
          "tag": "#9VQQRPQ2R",
          "name": "مايا",
          "townHallLevel": 10
        },
        {
          "tag": "#PV02PJYY",
          "name": "الـقيصر الـسوري",
          "townHallLevel": 13
        },
        {
          "tag": "#82V2GQLRQ",
          "name": "⁽عــآشـق₎♡",
          "townHallLevel": 12
        },
        {
          "tag": "#9LJ9CRGVP",
          "name": "ابو نبال♡★♡★",
          "townHallLevel": 12
        },
        {
          "tag": "#8GRVUVGGR",
          "name": "أّبًنِ سِـوٌريأ",
          "townHallLevel": 13
        },
        {
          "tag": "#L2RV88PGL",
          "name": "Mohamed ali",
          "townHallLevel": 12
        },
        {
          "tag": "#PPR2ULR0G",
          "name": "يارا",
          "townHallLevel": 11
        },
        {
          "tag": "#2UYGPJUQY",
          "name": "القيصر السوري",
          "townHallLevel": 11
        },
        {
          "tag": "#PGR2YJ2U",
          "name": "☆عمر السوري☆",
          "townHallLevel": 13
        },
        {
          "tag": "#L8RYQCJGU",
          "name": "ابوالجود",
          "townHallLevel": 8
        },
        {
          "tag": "#Q0R00CR82",
          "name": "حموية ياسما",
          "townHallLevel": 3
        },
        {
          "tag": "#Y0LQVPUUQ",
          "name": "lofe",
          "townHallLevel": 12
        },
        {
          "tag": "#LCG2U9L9C",
          "name": "*نسر*",
          "townHallLevel": 7
        },
        {
          "tag": "#2RJQJVVYP",
          "name": "☠SOSO❤DOSHKA☠",
          "townHallLevel": 11
        },
        {
          "tag": "#LV9YCQ22C",
          "name": "M A H R HMA",
          "townHallLevel": 7
        },
        {
          "tag": "#9CJJ9LV8C",
          "name": "دمشقية الهوى",
          "townHallLevel": 12
        },
        {
          "tag": "#Q8QV999RY",
          "name": "Nour",
          "townHallLevel": 3
        },
        {
          "tag": "#9GUJCV8VJ",
          "name": "|.lOord.|",
          "townHallLevel": 11
        },
        {
          "tag": "#Y9890CCYR",
          "name": "شامية يا خال",
          "townHallLevel": 13
        },
        {
          "tag": "#YC8LLJYCU",
          "name": "ツبتاﾑ๛",
          "townHallLevel": 10
        },
        {
          "tag": "#YQP0QP2UQ",
          "name": "✌حماه يا❤عشقي✌",
          "townHallLevel": 9
        }
      ]
    },
    {
      "tag": "#29LJQP092",
      "name": "战争之王",
      "clanLevel": 8,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/TfRydHewUMBiEXiDC0AdQK2tuToi3bTG53-JlxTgoqw.png",
        "large": "https://api-assets.clashofclans.com/badges/512/TfRydHewUMBiEXiDC0AdQK2tuToi3bTG53-JlxTgoqw.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/TfRydHewUMBiEXiDC0AdQK2tuToi3bTG53-JlxTgoqw.png"
      },
      "members": [
        {
          "tag": "#9VVLCCGGJ",
          "name": "神圣之尊",
          "townHallLevel": 11
        },
        {
          "tag": "#Y08PUG8P8",
          "name": "恶意",
          "townHallLevel": 10
        },
        {
          "tag": "#LR2L8JL9V",
          "name": "管仔",
          "townHallLevel": 9
        },
        {
          "tag": "#9J8PU00GQ",
          "name": "露过",
          "townHallLevel": 13
        },
        {
          "tag": "#8GYRCUGRU",
          "name": "zi xuan",
          "townHallLevel": 12
        },
        {
          "tag": "#LL22JQPYL",
          "name": "蓝诺",
          "townHallLevel": 11
        },
        {
          "tag": "#L0LUJLVQC",
          "name": "海澜之泪，劳资衣柜",
          "townHallLevel": 9
        },
        {
          "tag": "#YPL2U22R2",
          "name": "护城",
          "townHallLevel": 11
        },
        {
          "tag": "#L909VQP28",
          "name": "完美",
          "townHallLevel": 11
        },
        {
          "tag": "#LPPJGG0PV",
          "name": "凤舞九天",
          "townHallLevel": 13
        },
        {
          "tag": "#Q8PLJYLV",
          "name": "无敌战神",
          "townHallLevel": 12
        },
        {
          "tag": "#2YPPCY8RU",
          "name": "殇城",
          "townHallLevel": 11
        },
        {
          "tag": "#LR98UVV9R",
          "name": "战争世界",
          "townHallLevel": 10
        },
        {
          "tag": "#LCPVVLV88",
          "name": "末世云烟",
          "townHallLevel": 10
        },
        {
          "tag": "#LYUJQVLJ0",
          "name": "gkyyyy",
          "townHallLevel": 9
        },
        {
          "tag": "#PJL88JC9C",
          "name": "繁华村庄",
          "townHallLevel": 8
        },
        {
          "tag": "#LUUPJJCJR",
          "name": "露宿街头",
          "townHallLevel": 6
        },
        {
          "tag": "#Q0QL2L8LR",
          "name": "叹一世之殇℡",
          "townHallLevel": 8
        },
        {
          "tag": "#PRJQGYJ8Q",
          "name": "梦影",
          "townHallLevel": 12
        },
        {
          "tag": "#YV2PQV0PP",
          "name": "黑星",
          "townHallLevel": 10
        },
        {
          "tag": "#8PLG8RCCL",
          "name": "偷心盗贼",
          "townHallLevel": 11
        },
        {
          "tag": "#PJ8V000LU",
          "name": "殇情",
          "townHallLevel": 11
        },
        {
          "tag": "#9UPYR0YQC",
          "name": "寂寞的00后",
          "townHallLevel": 11
        },
        {
          "tag": "#L9JC2JV9Y",
          "name": "战争世界2·0",
          "townHallLevel": 8
        },
        {
          "tag": "#P8JGPG89P",
          "name": "123456",
          "townHallLevel": 9
        },
        {
          "tag": "#LVJ99PGGY",
          "name": "没名",
          "townHallLevel": 8
        },
        {
          "tag": "#LLJPLC029",
          "name": "JIANG❤GAN",
          "townHallLevel": 10
        },
        {
          "tag": "#2JRVVCCJJ",
          "name": "君莫笑",
          "townHallLevel": 9
        },
        {
          "tag": "#PQU0CR0GU",
          "name": "我一挑五",
          "townHallLevel": 9
        },
        {
          "tag": "#L90VPRRUJ",
          "name": "飞豹队",
          "townHallLevel": 9
        },
        {
          "tag": "#PVU02U8YV",
          "name": "北城",
          "townHallLevel": 13
        },
        {
          "tag": "#P0J8V8Y0P",
          "name": "啊杰^^",
          "townHallLevel": 10
        },
        {
          "tag": "#L0GCLJJ9Q",
          "name": "顾北",
          "townHallLevel": 11
        },
        {
          "tag": "#YV2C8JPQG",
          "name": "亚东ξ新西兰",
          "townHallLevel": 9
        },
        {
          "tag": "#YVU0G292C",
          "name": "小阿祁",
          "townHallLevel": 13
        },
        {
          "tag": "#LG8J88Q2J",
          "name": "。。。",
          "townHallLevel": 9
        }
      ]
    },
    {
      "tag": "#PC2Q08V2",
      "name": "☆☆LOS FUERTE☆☆",
      "clanLevel": 13,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/aRYhfiXBDZqfIP2fwCtEbnYbgl9mYvd00PsN1P9qkVc.png",
        "large": "https://api-assets.clashofclans.com/badges/512/aRYhfiXBDZqfIP2fwCtEbnYbgl9mYvd00PsN1P9qkVc.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/aRYhfiXBDZqfIP2fwCtEbnYbgl9mYvd00PsN1P9qkVc.png"
      },
      "members": [
        {
          "tag": "#Y9VYG080U",
          "name": "●☆♧♤♡ElPuma♡♤♧☆",
          "townHallLevel": 13
        },
        {
          "tag": "#9Q0ULJ9R2",
          "name": "renekicd",
          "townHallLevel": 12
        },
        {
          "tag": "#2UC92YJLC",
          "name": "GUERRERO 11:11",
          "townHallLevel": 12
        },
        {
          "tag": "#UR0GR9RC",
          "name": "manuele",
          "townHallLevel": 11
        },
        {
          "tag": "#2GVL9VRLC",
          "name": "Nani mo",
          "townHallLevel": 13
        },
        {
          "tag": "#202828UJ0",
          "name": "hercules",
          "townHallLevel": 12
        },
        {
          "tag": "#92RC8VU20",
          "name": "oscar",
          "townHallLevel": 12
        },
        {
          "tag": "#9C90YU8L0",
          "name": "gilberth",
          "townHallLevel": 13
        },
        {
          "tag": "#8CQU2U8YC",
          "name": "XrXiXpTENTACION",
          "townHallLevel": 12
        },
        {
          "tag": "#8RPUQC8PR",
          "name": "XCHATO2000X",
          "townHallLevel": 13
        },
        {
          "tag": "#VLCJGJJV",
          "name": "El Padrino",
          "townHallLevel": 12
        },
        {
          "tag": "#2LQ9LJYYY",
          "name": "JØHAN REYES",
          "townHallLevel": 11
        },
        {
          "tag": "#R9QQVY2Y",
          "name": "Alejandro",
          "townHallLevel": 11
        },
        {
          "tag": "#2UCQJVPP8",
          "name": "R2D2",
          "townHallLevel": 13
        },
        {
          "tag": "#82J2L8QJ",
          "name": "oscar chikitooo",
          "townHallLevel": 13
        }
      ]
    },
    {
      "tag": "#QJYCUQY2",
      "name": "AVENGERS PL",
      "clanLevel": 14,
      "badgeUrls": {
        "small": "https://api-assets.clashofclans.com/badges/70/EktSjH5kQEVL69v08JVhG0QcWdDuLdiZI8rOUmrvzTI.png",
        "large": "https://api-assets.clashofclans.com/badges/512/EktSjH5kQEVL69v08JVhG0QcWdDuLdiZI8rOUmrvzTI.png",
        "medium": "https://api-assets.clashofclans.com/badges/200/EktSjH5kQEVL69v08JVhG0QcWdDuLdiZI8rOUmrvzTI.png"
      },
      "members": [
        {
          "tag": "#PLUJLCP8Y",
          "name": "Son Gohan",
          "townHallLevel": 11
        },
        {
          "tag": "#PR99VV8CY",
          "name": "VaeVictis",
          "townHallLevel": 10
        },
        {
          "tag": "#2QCLQCYQJ",
          "name": "Bella Izabella",
          "townHallLevel": 9
        },
        {
          "tag": "#URPCU0PR",
          "name": "KoNiCzYnKa",
          "townHallLevel": 8
        },
        {
          "tag": "#YQPYQQQLL",
          "name": "Ravixjunior",
          "townHallLevel": 11
        },
        {
          "tag": "#898P029UV",
          "name": "IzabelaEdyta",
          "townHallLevel": 8
        },
        {
          "tag": "#2UPJYCP80",
          "name": "blUe",
          "townHallLevel": 10
        },
        {
          "tag": "#LGG9V8P2V",
          "name": "piti",
          "townHallLevel": 4
        },
        {
          "tag": "#Y8VC8CVP0",
          "name": "UY",
          "townHallLevel": 10
        },
        {
          "tag": "#L2UQ9YRV0",
          "name": "Mr_Lisek",
          "townHallLevel": 5
        },
        {
          "tag": "#2CYVJY280",
          "name": "Koral",
          "townHallLevel": 11
        },
        {
          "tag": "#8P22GQPLC",
          "name": "ONCE",
          "townHallLevel": 10
        },
        {
          "tag": "#PRVCGPU2C",
          "name": "Goku",
          "townHallLevel": 12
        },
        {
          "tag": "#2C8CJ9L9G",
          "name": "kazik",
          "townHallLevel": 11
        },
        {
          "tag": "#PRY08PYJR",
          "name": "Ravix",
          "townHallLevel": 12
        },
        {
          "tag": "#YU29C8R8R",
          "name": "Ravixmini",
          "townHallLevel": 10
        },
        {
          "tag": "#YJPPPY9RY",
          "name": "Piterson",
          "townHallLevel": 10
        },
        {
          "tag": "#L9GJ00L9P",
          "name": "Tshask",
          "townHallLevel": 4
        },
        {
          "tag": "#Y2PLGYJJY",
          "name": "King of Poland",
          "townHallLevel": 11
        },
        {
          "tag": "#L0VPGVYCQ",
          "name": "Bella",
          "townHallLevel": 3
        },
        {
          "tag": "#L92QQ2V0G",
          "name": "❤️Vesp3r❤️",
          "townHallLevel": 3
        }
      ]
    }
  ],
  "rounds": [
    {
      "warTags": [
        "#2RU0QL02C",
        "#2RU0QL2L2",
        "#2RU0QYUCQ",
        "#2RU0QL8JY"
      ]
    },
    {
      "warTags": [
        "#2RU9J8JR9",
        "#2RU9J8CVQ",
        "#2RU9J8V9C",
        "#2RU9J90G2"
      ]
    },
    {
      "warTags": [
        "#2RULJY92Q",
        "#2RULJYPYC",
        "#2RULJYQ0Y",
        "#2RULJYYJ2"
      ]
    },
    {
      "warTags": [
        "#0",
        "#0",
        "#0",
        "#0"
      ]
    },
    {
      "warTags": [
        "#0",
        "#0",
        "#0",
        "#0"
      ]
    },
    {
      "warTags": [
        "#0",
        "#0",
        "#0",
        "#0"
      ]
    },
    {
      "warTags": [
        "#0",
        "#0",
        "#0",
        "#0"
      ]
    }
  ]
}

exports.cwlWarTag = {
  "state": "warEnded", // previous: warEnded, current: inWar, next: preparation
  "teamSize": 15,
  "preparationStartTime": "20201102T224350.000Z",
  "startTime": "20201103T224348.000Z",
  "endTime": "20201104T224348.000Z",
  "clan": {
    "tag": "#QVUPC08",
    "name": "BD.troops",
    "badgeUrls": {
      "small": "https://api-assets.clashofclans.com/badges/70/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png",
      "large": "https://api-assets.clashofclans.com/badges/512/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png",
      "medium": "https://api-assets.clashofclans.com/badges/200/Xippl8WCvpn6YZPs0odqZH9GZ-R9_ugGAC6pQfYZKp0.png"
    },
    "clanLevel": 14,
    "attacks": 12,
    "stars": 19,
    "destructionPercentage": 47.733333333333334,
    "members": [
      {
        "tag": "#88JY8PJGJ",
        "name": "M H S",
        "townhallLevel": 12,
        "mapPosition": 7,
        "attacks": [
          {
            "attackerTag": "#88JY8PJGJ",
            "defenderTag": "#280UGG98J",
            "stars": 2,
            "destructionPercentage": 77,
            "order": 25
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#YRLUG2YV2",
          "defenderTag": "#88JY8PJGJ",
          "stars": 1,
          "destructionPercentage": 99,
          "order": 1
        }
      },
      {
        "tag": "#LLPRVJGR",
        "name": "Shaikat",
        "townhallLevel": 13,
        "mapPosition": 1,
        "attacks": [
          {
            "attackerTag": "#LLPRVJGR",
            "defenderTag": "#8GRVUVGGR",
            "stars": 2,
            "destructionPercentage": 89,
            "order": 7
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#PJ8JQ282G",
          "defenderTag": "#LLPRVJGR",
          "stars": 2,
          "destructionPercentage": 77,
          "order": 16
        }
      },
      {
        "tag": "#82CJGQGQ9",
        "name": "mhshakil09",
        "townhallLevel": 11,
        "mapPosition": 12,
        "attacks": [
          {
            "attackerTag": "#82CJGQGQ9",
            "defenderTag": "#98P980VYC",
            "stars": 2,
            "destructionPercentage": 78,
            "order": 24
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#2UYGPJUQY",
          "defenderTag": "#82CJGQGQ9",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 2
        }
      },
      {
        "tag": "#VUR8LU2Y",
        "name": "hayder",
        "townhallLevel": 11,
        "mapPosition": 13,
        "attacks": [
          {
            "attackerTag": "#VUR8LU2Y",
            "defenderTag": "#YRL8Y0LLP",
            "stars": 2,
            "destructionPercentage": 81,
            "order": 13
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#PGUQVYUY8",
          "defenderTag": "#VUR8LU2Y",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 17
        }
      },
      {
        "tag": "#2RGU8YRRY",
        "name": "HEEM",
        "townhallLevel": 10,
        "mapPosition": 19,
        "attacks": [
          {
            "attackerTag": "#2RGU8YRRY",
            "defenderTag": "#PL2PLUYCU",
            "stars": 1,
            "destructionPercentage": 60,
            "order": 5
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#PL2PLUYCU",
          "defenderTag": "#2RGU8YRRY",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 9
        }
      },
      {
        "tag": "#9L8VJ92C",
        "name": "Sultan Al Hasan",
        "townhallLevel": 12,
        "mapPosition": 5,
        "attacks": [
          {
            "attackerTag": "#9L8VJ92C",
            "defenderTag": "#PV02PJYY",
            "stars": 2,
            "destructionPercentage": 55,
            "order": 22
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#8GRVUVGGR",
          "defenderTag": "#9L8VJ92C",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 8
        }
      },
      {
        "tag": "#PLLQPLR0",
        "name": "$675$",
        "townhallLevel": 13,
        "mapPosition": 4,
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#PGR2YJ2U",
          "defenderTag": "#PLLQPLR0",
          "stars": 2,
          "destructionPercentage": 74,
          "order": 10
        }
      },
      {
        "tag": "#V2G2U0VR",
        "name": "AsiF",
        "townhallLevel": 11,
        "mapPosition": 9,
        "attacks": [
          {
            "attackerTag": "#V2G2U0VR",
            "defenderTag": "#L2RV88PGL",
            "stars": 2,
            "destructionPercentage": 77,
            "order": 18
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#82V2GQLRQ",
          "defenderTag": "#V2G2U0VR",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 23
        }
      },
      {
        "tag": "#VJGUCULL",
        "name": "Bad Warrior",
        "townhallLevel": 13,
        "mapPosition": 3,
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#Y9890CCYR",
          "defenderTag": "#VJGUCULL",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 12
        }
      },
      {
        "tag": "#892YCGVUJ",
        "name": "NADIM_MAHMUD",
        "townhallLevel": 11,
        "mapPosition": 10,
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#L2RV88PGL",
          "defenderTag": "#892YCGVUJ",
          "stars": 1,
          "destructionPercentage": 52,
          "order": 27
        }
      },
      {
        "tag": "#9Q9C8YQL",
        "name": "Abìd MD FaHím",
        "townhallLevel": 13,
        "mapPosition": 2,
        "attacks": [
          {
            "attackerTag": "#9Q9C8YQL",
            "defenderTag": "#Y9890CCYR",
            "stars": 2,
            "destructionPercentage": 68,
            "order": 19
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#PV02PJYY",
          "defenderTag": "#9Q9C8YQL",
          "stars": 2,
          "destructionPercentage": 61,
          "order": 14
        }
      },
      {
        "tag": "#2UPL0PRP2",
        "name": "AsiF II",
        "townhallLevel": 12,
        "mapPosition": 8,
        "attacks": [
          {
            "attackerTag": "#2UPL0PRP2",
            "defenderTag": "#82V2GQLRQ",
            "stars": 1,
            "destructionPercentage": 53,
            "order": 20
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#98P980VYC",
          "defenderTag": "#2UPL0PRP2",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 11
        }
      },
      {
        "tag": "#8CJ9J28VU",
        "name": "afs",
        "townhallLevel": 11,
        "mapPosition": 11,
        "attacks": [
          {
            "attackerTag": "#8CJ9J28VU",
            "defenderTag": "#2UYGPJUQY",
            "stars": 2,
            "destructionPercentage": 74,
            "order": 26
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#9CJJ9LV8C",
          "defenderTag": "#8CJ9J28VU",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 3
        }
      },
      {
        "tag": "#YY8Y0YJV0",
        "name": "Mahruf Saad",
        "townhallLevel": 10,
        "mapPosition": 18,
        "attacks": [
          {
            "attackerTag": "#YY8Y0YJV0",
            "defenderTag": "#PL2PLUYCU",
            "stars": 2,
            "destructionPercentage": 64,
            "order": 21
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#YRL8Y0LLP",
          "defenderTag": "#YY8Y0YJV0",
          "stars": 3,
          "destructionPercentage": 100,
          "order": 15
        }
      },
      {
        "tag": "#LGJUPRPJP",
        "name": "zkr",
        "townhallLevel": 11,
        "mapPosition": 16,
        "attacks": [
          {
            "attackerTag": "#LGJUPRPJP",
            "defenderTag": "#280UGG98J",
            "stars": 0,
            "destructionPercentage": 28,
            "order": 6
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#280UGG98J",
          "defenderTag": "#LGJUPRPJP",
          "stars": 2,
          "destructionPercentage": 79,
          "order": 4
        }
      }
    ]
  },
  "opponent": {
    "tag": "#28CJJQ2PJ",
    "name": "❤قياصرة✴حماه❤",
    "badgeUrls": {
      "small": "https://api-assets.clashofclans.com/badges/70/uovBCE1N2r1Y5Poo4ek0zshmoCFfzFsd2wYWpX5pNL0.png",
      "large": "https://api-assets.clashofclans.com/badges/512/uovBCE1N2r1Y5Poo4ek0zshmoCFfzFsd2wYWpX5pNL0.png",
      "medium": "https://api-assets.clashofclans.com/badges/200/uovBCE1N2r1Y5Poo4ek0zshmoCFfzFsd2wYWpX5pNL0.png"
    },
    "clanLevel": 7,
    "attacks": 15,
    "stars": 37,
    "destructionPercentage": 89.46666666666667,
    "members": [
      {
        "tag": "#PGUQVYUY8",
        "name": "✌الحموي❤الحر✌",
        "townhallLevel": 12,
        "mapPosition": 11,
        "attacks": [
          {
            "attackerTag": "#PGUQVYUY8",
            "defenderTag": "#VUR8LU2Y",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 17
          }
        ],
        "opponentAttacks": 0
      },
      {
        "tag": "#YRL8Y0LLP",
        "name": "لا ياصديقي",
        "townhallLevel": 11,
        "mapPosition": 20,
        "attacks": [
          {
            "attackerTag": "#YRL8Y0LLP",
            "defenderTag": "#YY8Y0YJV0",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 15
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#VUR8LU2Y",
          "defenderTag": "#YRL8Y0LLP",
          "stars": 2,
          "destructionPercentage": 81,
          "order": 13
        }
      },
      {
        "tag": "#98P980VYC",
        "name": "♡☆حماه❤العز☆♡",
        "townhallLevel": 11,
        "mapPosition": 16,
        "attacks": [
          {
            "attackerTag": "#98P980VYC",
            "defenderTag": "#2UPL0PRP2",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 11
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#82CJGQGQ9",
          "defenderTag": "#98P980VYC",
          "stars": 2,
          "destructionPercentage": 78,
          "order": 24
        }
      },
      {
        "tag": "#PJ8JQ282G",
        "name": "zz",
        "townhallLevel": 13,
        "mapPosition": 1,
        "attacks": [
          {
            "attackerTag": "#PJ8JQ282G",
            "defenderTag": "#LLPRVJGR",
            "stars": 2,
            "destructionPercentage": 77,
            "order": 16
          }
        ],
        "opponentAttacks": 0
      },
      {
        "tag": "#PV02PJYY",
        "name": "الـقيصر الـسوري",
        "townhallLevel": 13,
        "mapPosition": 2,
        "attacks": [
          {
            "attackerTag": "#PV02PJYY",
            "defenderTag": "#9Q9C8YQL",
            "stars": 2,
            "destructionPercentage": 61,
            "order": 14
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#9L8VJ92C",
          "defenderTag": "#PV02PJYY",
          "stars": 2,
          "destructionPercentage": 55,
          "order": 22
        }
      },
      {
        "tag": "#280UGG98J",
        "name": "الـقيصر الـسوري",
        "townhallLevel": 11,
        "mapPosition": 17,
        "attacks": [
          {
            "attackerTag": "#280UGG98J",
            "defenderTag": "#LGJUPRPJP",
            "stars": 2,
            "destructionPercentage": 79,
            "order": 4
          }
        ],
        "opponentAttacks": 2,
        "bestOpponentAttack": {
          "attackerTag": "#88JY8PJGJ",
          "defenderTag": "#280UGG98J",
          "stars": 2,
          "destructionPercentage": 77,
          "order": 25
        }
      },
      {
        "tag": "#L2RV88PGL",
        "name": "Mohamed ali",
        "townhallLevel": 12,
        "mapPosition": 10,
        "attacks": [
          {
            "attackerTag": "#L2RV88PGL",
            "defenderTag": "#892YCGVUJ",
            "stars": 1,
            "destructionPercentage": 52,
            "order": 27
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#V2G2U0VR",
          "defenderTag": "#L2RV88PGL",
          "stars": 2,
          "destructionPercentage": 77,
          "order": 18
        }
      },
      {
        "tag": "#PL2PLUYCU",
        "name": "القيصر الحموي",
        "townhallLevel": 10,
        "mapPosition": 24,
        "attacks": [
          {
            "attackerTag": "#PL2PLUYCU",
            "defenderTag": "#2RGU8YRRY",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 9
          }
        ],
        "opponentAttacks": 2,
        "bestOpponentAttack": {
          "attackerTag": "#YY8Y0YJV0",
          "defenderTag": "#PL2PLUYCU",
          "stars": 2,
          "destructionPercentage": 64,
          "order": 21
        }
      },
      {
        "tag": "#Y9890CCYR",
        "name": "شامية يا خال",
        "townhallLevel": 13,
        "mapPosition": 3,
        "attacks": [
          {
            "attackerTag": "#Y9890CCYR",
            "defenderTag": "#VJGUCULL",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 12
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#9Q9C8YQL",
          "defenderTag": "#Y9890CCYR",
          "stars": 2,
          "destructionPercentage": 68,
          "order": 19
        }
      },
      {
        "tag": "#YRLUG2YV2",
        "name": "حسين ابو حسن",
        "townhallLevel": 11,
        "mapPosition": 14,
        "attacks": [
          {
            "attackerTag": "#YRLUG2YV2",
            "defenderTag": "#88JY8PJGJ",
            "stars": 1,
            "destructionPercentage": 99,
            "order": 1
          }
        ],
        "opponentAttacks": 0
      },
      {
        "tag": "#82V2GQLRQ",
        "name": "⁽عــآشـق₎♡",
        "townhallLevel": 12,
        "mapPosition": 8,
        "attacks": [
          {
            "attackerTag": "#82V2GQLRQ",
            "defenderTag": "#V2G2U0VR",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 23
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#2UPL0PRP2",
          "defenderTag": "#82V2GQLRQ",
          "stars": 1,
          "destructionPercentage": 53,
          "order": 20
        }
      },
      {
        "tag": "#2UYGPJUQY",
        "name": "القيصر السوري",
        "townhallLevel": 11,
        "mapPosition": 15,
        "attacks": [
          {
            "attackerTag": "#2UYGPJUQY",
            "defenderTag": "#82CJGQGQ9",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 2
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#8CJ9J28VU",
          "defenderTag": "#2UYGPJUQY",
          "stars": 2,
          "destructionPercentage": 74,
          "order": 26
        }
      },
      {
        "tag": "#PGR2YJ2U",
        "name": "☆عمر السوري☆",
        "townhallLevel": 13,
        "mapPosition": 4,
        "attacks": [
          {
            "attackerTag": "#PGR2YJ2U",
            "defenderTag": "#PLLQPLR0",
            "stars": 2,
            "destructionPercentage": 74,
            "order": 10
          }
        ],
        "opponentAttacks": 0
      },
      {
        "tag": "#8GRVUVGGR",
        "name": "أّبًنِ سِـوٌريأ",
        "townhallLevel": 13,
        "mapPosition": 5,
        "attacks": [
          {
            "attackerTag": "#8GRVUVGGR",
            "defenderTag": "#9L8VJ92C",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 8
          }
        ],
        "opponentAttacks": 1,
        "bestOpponentAttack": {
          "attackerTag": "#LLPRVJGR",
          "defenderTag": "#8GRVUVGGR",
          "stars": 2,
          "destructionPercentage": 89,
          "order": 7
        }
      },
      {
        "tag": "#9CJJ9LV8C",
        "name": "دمشقية الهوى",
        "townhallLevel": 12,
        "mapPosition": 7,
        "attacks": [
          {
            "attackerTag": "#9CJJ9LV8C",
            "defenderTag": "#8CJ9J28VU",
            "stars": 3,
            "destructionPercentage": 100,
            "order": 3
          }
        ],
        "opponentAttacks": 0
      }
    ]
  },
  "warStartTime": "20201103T224348.000Z" // current: "warStartTime": "20201104T225752.000Z"
}
