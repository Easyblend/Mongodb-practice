require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    const result = await mongoose.connect(process.env.MONGO_URI);
    console.log(result.ConnectionStates);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
