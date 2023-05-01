const jwt = require("jsonwebtoken");

const data = {
  id: 1,
  name: "Steve",
};

const token = jwt.sign(data, "secret123", { expiresIn: "10h" });

console.log(token);
