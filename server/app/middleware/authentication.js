const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticateUser = (request, response, next) => {
  const authHeader = request.header("Authorization");

  if (!authHeader) {
    response.status(401).json({
      message: "No Authorization",
    });
    return;
  }

  const token = authHeader.split(" ")[1];
  let tokenData;
  try {
    tokenData = jwt.verify(token, "secret123");
    User.findById(tokenData._id)
      .then((user) => {
        request.user = user;
        next();
      })
      .catch((error) => {
        response.status(400).json(error.message);
      });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

module.exports = {
  authenticateUser,
};
