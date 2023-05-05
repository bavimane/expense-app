const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Budget = require("../models/budget");
const Catagory = require("../models/catagory");

const userController = {};

userController.list = (request, response) => {
  User.find()
    .then((users) => {
      response.json(users);
    })
    .catch((error) => {
      response.json(error);
    });
};

userController.register = (request, response) => {
  const body = request.body;
  const user = new User(body);

  user
    .save()
    .then((user) => {
      const budget = new Budget({
        _id: user._id,
        amount: 0,
      });
      budget.save();

      const category = new Catagory({
        _id: user._id,
        name: [],
      });
      category.save().then(
        () => console.log("SUCCESS"),
        (e) => console.log("ERR", e)
      );
      response.json(user);
    })
    .catch((error) => {
      response.json(error);
    });
};

userController.login = (request, response) => {
  const body = request.body;
  User.findOne({ email: body.email }).then((user) => {
    if (!user) {
      response.json({ error: "invalid email or password" });
    }
    bcryptjs.compare(body.password, user.password).then((match) => {
      if (match) {
        const tokenData = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
        const token = jwt.sign(tokenData, "secret123", { expiresIn: "2d" });
        response.json({
          token: `Bearer ${token}`,
          id: user._id,
        });
      } else {
        response.json({ error: "invalid email or password" });
      }
    });
  });
};

userController.profile = (request, response) => {
  response.json(request.user);
};

module.exports = userController;
