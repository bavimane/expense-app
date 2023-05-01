const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 64,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: function (value) {
        return isEmail(value);
      },
      message: function () {
        return "invalid email format";
      },
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 64,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  bcryptjs.genSalt().then((salt) => {
    bcryptjs.hash(user.password, salt).then((encrypted) => {
      user.password = encrypted;
      next();
    });
  });
});
const User = mongoose.model("User", userSchema);

module.exports = User;
