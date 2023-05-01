const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticateUser = (request, response, next) => {
  const token = request.header("Authorization").split(" ")[1];
  let tokenData;
  try {
    tokenData = jwt.verify(token, "secret123");
    User.findById(tokenData._id)
      .then((user) => {
        request.user = user;
        next();
      })
      .catch((error) => {
        response.json(error.message);
      });
  } catch (error) {
    response.json(error.message);
  }
};

module.exports = {
  authenticateUser,
};
