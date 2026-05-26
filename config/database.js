const mongoDB = require("mongoose");
require("dotenv").config();
const databse = async (req, res) => {
  try {
    await mongoDB.connect(process.env.MONGODBURL);
    console.log("MongoDb is connected Successfully");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = databse;
