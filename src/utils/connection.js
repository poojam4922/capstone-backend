const mongoose = require("mongoose");
const { buses } = require("../../dummyData");
const connectDataBaseServer = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);
    console.log("connected to mongoDB");
  } catch (error) {
    console.error("Connection to mongoDB failed", error.message);
  }
};

module.exports = connectDataBaseServer;
