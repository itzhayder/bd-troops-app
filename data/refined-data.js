export const currentWar = {
  state: 'warEnded',
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
    attacks: 16,
    stars: 23,
    destructionPercentage: 82.7,
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
  }
}

export const statistics = {
  townhallStars: {
    12: {
      count: 8,
      starsGet: 19
    },
    11: {
      count: 10,
      starsGet: 13
    },
    10: {
      count: 5,
      starsGet: 8
    }
  },
}


// No_of_Attack = NoA
// No_of_Star = NoS // th deference er upor depend kore per star e 2 kore kom beshi
// No_of_Percentage = NoP // average percentage
// Total_Point = TP

// (NoA*5) + (NoS*10) + floor(NoP/10) = TP

// Karo total point 100+ manei she 2 ta attack dise. (80 intotal)