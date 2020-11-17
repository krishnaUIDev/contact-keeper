const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

module.exports = async function () {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("conneted to mogodb..");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
