const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB CONFIGURED");
  } catch (err) {
    console.log("Mongo DB Cofig Failed");
  }
};
module.exports = { connectDB };
