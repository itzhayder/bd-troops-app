const mongoose = require('mongoose');
const { Schema } = mongoose;

const CurrentWarSchema = new Schema({
  state: String,
  teamSize: Number,
  preparationStartTime: String,
  startTime: String,
  endTime: String,
  clan: {
    name: String,
    badgeUrls: {
      small: String,
      medium: String
    },
    attacks: Number,
    stars: Number,
    destructionPercentage: Number,
  },
  opponent: {
    name: String,
    badgeUrls: {
      small: String,
      medium: String
    },
    attacks: Number,
    stars: Number,
    destructionPercentage: Number,
  }
});

module.exports = mongoose.model(currentWar, CurrenWarSchema);











// const currentWarSchema = new Schema({
//   state: String,
//   teamSize: Number,
//   preparationStartTime: String,
//   startTime: String,
//   endTime: String,
//   clan: {
//     name: String,
//     badgeUrls: {
//       small: String,
//       medium: String
//     },
//     clanLevel: Number,
//     attacks: Number,
//     stars: Number,
//     destructionPercentage: Number,
//     members: [{
//       tag: String,
//       name: String,
//       townhallLevel: Number,
//       mapPosition: Number,
//       attacks: [
//         {
//           attackerTag: String,
//           defenderTag: String,
//           stars: Number,
//           destructionPercentage: Number,
//           order: Number
//         }
//       ],
//       opponentAttacks: Number,
//       bestOpponentAttack: {
//         attackerTag: String,
//         defenderTag: String,
//         stars: Number,
//         destructionPercentage: Number,
//         order: Number
//       }
//     }]
//   },
//   opponent: {
//     name: String,
//     badgeUrls:{
//       small: String,
//       medium: String
//     },
//     clanLevel: Number,
//     attacks: Number,
//     stars: Number,
//     destructionPercentage: Number,
//     members: [{
//       tag: String,
//       name: String,
//       townhallLevel: Number,
//       mapPosition: Number,
//       attacks:[
//         {
//           attackerTag: String,
//           defenderTag: String,
//           stars: Number,
//           destructionPercentage: Number,
//           order: Number
//         },
//       ],
//       opponentAttacks: Number,
//       bestOpponentAttack:{
//         attackerTag: String,
//         defenderTag: String,
//         stars: Number,
//         destructionPercentage: Number,
//         order: Number
//       }
//     }]
//   }
// });

// module.exports = mongoose.model(currentWar, currentWarSchema);