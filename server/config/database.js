const mongoose = require("mongoose");

const configureDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/expense-app")
    .then(() => {
      console.log("connected to DB");
    })
    .catch(() => {
      console.log("failed to connect");
    });
};

module.exports = configureDB;
