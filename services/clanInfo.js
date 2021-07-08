const ClanInfo = require("../models/ClanInfo");
const compareDataAndSet = require("../utils/compareDataAndSet");

const clanInfo = async (apiData, client) => {
    try {
        const data = {
            key: "clanInfo",
            newData: apiData,
            message: {
                initial: "clanInfo save in cache for the first time",
                updated: "clanInfo cache updated",
            },
        };

        const change = await compareDataAndSet(data, client); // return boolean: true (udpated) or false (not udpated)

        console.log("change clanInfo:", change);

        if (change === true) {
            const updatedApiData = { ...apiData };
            updatedApiData.memberList.sort((a, b) => b.donations - a.donations);

            updatedApiData.updatedAt = new Date().toLocaleString();

            ClanInfo.countDocuments(async (countDocumentsError, count) => {
                if (count <= 0) {
                    // document doesn't exist in database
                    const savedDoc = await ClanInfo.create(updatedApiData);
                    client.set("clanInfoDocId", `${savedDoc._id}`);
                    console.log("clanInfo database initial set");
                } else {
                    // document exist in database
                    client.get(
                        "clanInfoDocId",
                        async (getClanInfoDocIdError, id) => {
                            if (id === null) {
                                const resultDocs = await ClanInfo.find({});
                                client.set(
                                    "clanInfoDocId",
                                    `${resultDocs[0]._id}`
                                );

                                ClanInfo.updateOne(
                                    { _id: resultDocs[0]._id },
                                    updatedApiData,
                                    { upsert: true },
                                    (updateOneError, raw) => {
                                        console.log(
                                            "clanInfo database updated"
                                        );
                                    }
                                );
                            } else {
                                ClanInfo.updateOne(
                                    { _id: id },
                                    updatedApiData,
                                    { upsert: true },
                                    (updateOneError, raw) => {
                                        console.log(
                                            "clanInfo database updated"
                                        );
                                    }
                                );
                            }
                        }
                    );
                }
            });
        }
    } catch (error) {
        console.log("[clanInfo]: error:", error);
    }
};

module.exports = clanInfo;
