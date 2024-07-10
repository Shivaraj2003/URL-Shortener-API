const mongoose = require("mongoose");

const url = process.env.mongodbURL

async function connectMongodb() {
    return mongoose.connect(url)
        .then(() => console.log('MongoDb connected'))
        .catch((e) => console.log('Error in connecting MongoDb',e));
}

module.exports = connectMongodb;


