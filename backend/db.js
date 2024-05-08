const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017/simple-auth";

module.exports.connection = () => {
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB", error);
    });
};
