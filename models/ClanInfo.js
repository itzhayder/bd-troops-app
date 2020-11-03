const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClanInfoSchema = new Schema({
  tag:  String, // String is shorthand for {type: String}
  name: String,
  description: String,
  memberList: [{ 
    tag: String, 
    name: String, 
    role: String, 
    donations: Number,
    donationsReceived: Number 
  }],
  warWins: Number,
  warTies: Number,
  warLosses: Number,
  members: Number,
});

module.exports = mongoose.model(clanInfo, ClanInfoSchema);