const mongoose = require("mongoose");

const { Schema } = mongoose;

const TopDonatorSchema = new Schema({
    memberList: [
        {
            tag: String,
            name: String,
            donations: Number,
            donationsReceived: Number,
        },
    ],
});

module.exports = mongoose.model("topDonator", TopDonatorSchema);
