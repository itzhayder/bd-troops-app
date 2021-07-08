const mongoose = require("mongoose");

const { Schema } = mongoose;

const ClanInfoSchema = new Schema({
    tag: String, // String is shorthand for {type: String}
    name: String,
    description: String,
    location: {
        id: Number,
        name: String,
        isCountry: Boolean,
        countryCode: String,
    },
    warWins: Number,
    warTies: Number,
    warLosses: Number,
    members: Number,
    memberList: [
        {
            tag: String,
            name: String,
            role: String,
            expLevel: Number,
            league: {
                id: Number,
                name: String,
                iconUrls: {
                    small: String,
                    tiny: String,
                    medium: String,
                },
            },
            trophies: Number,
            versusTrophies: Number,
            clanRank: Number,
            previousClanRank: Number,
            donations: Number,
            donationsReceived: Number,
        },
    ],
    warLeague: {
        id: Number,
        name: String,
    },
    updatedAt: Date,
});

module.exports = mongoose.model("clanInfo", ClanInfoSchema);
