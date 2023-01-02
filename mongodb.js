require("dotenv").config();
const MONGODB_URI = process.env;
const mongoose = require("mongoose");

const connection = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGODB_URI, (error) => {
    if (error) {
      console.log("mongodb connection error", error);
    }
    console.log("mongodb connected");
  });
};

mongoose.connection.on("disconnected", mongoose.connect);

module.exports = connection;
