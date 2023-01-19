const Actor = require("./actortable");

exports.createActor = async (actorObj) => {
    try {
        const newActor = await Actor.create(actorObj);
        console.log(newActor);
    } catch (error) {
        console.log(error);
    }
};