const CurrentWar = require("../models/CurrentWar");
const compareDataAndSet = require("../utils/compareDataAndSet");

const currentWar = async (apiData, client) => {
    try {
        const data = {
            key: "currentWar",
            newData: apiData,
            message: {
                initial: "currentWar save in cache for the first time",
                updated: "currentWar cache updated",
            },
        };

        const change = await compareDataAndSet(data, client); // return an object with true (udpated) or false (not udpated)

        console.log("change currentWar:", change);

        if (change === true) {
            const updatedApiData = { ...apiData };
            updatedApiData.updatedAt = new Date().toLocaleString();

            CurrentWar.countDocuments(async (countDocumentsError, count) => {
                if (count <= 0) {
                    // document doesn't exist in database
                    const savedDoc = await CurrentWar.create(updatedApiData);
                    client.set("currentWarDocId", `${savedDoc._id}`);
                    console.log("currentWar database initial set");
                } else {
                    // document exist in database
                    client.get(
                        "currentWarDocId",
                        async (getCurrentWarDocIdError, id) => {
                            if (id === null) {
                                const resultDocs = await CurrentWar.find({});
                                client.set(
                                    "currentWarDocId",
                                    `${resultDocs[0]._id}`
                                );

                                CurrentWar.updateOne(
                                    { _id: resultDocs[0]._id },
                                    updatedApiData,
                                    { upsert: true },
                                    (updateOneError, raw) => {
                                        console.log(
                                            "currentWar database updated"
                                        );
                                    }
                                );
                            } else {
                                CurrentWar.updateOne(
                                    { _id: id },
                                    updatedApiData,
                                    { upsert: true },
                                    (updateOneError, raw) => {
                                        console.log(
                                            "currentWar database updated"
                                        );
                                    }
                                );
                            }
                        }
                    );
                }
            });
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = currentWar;
