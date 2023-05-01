const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlN0ZXZlIiwiaWF0IjoxNjgwNDAxODM3LCJleHAiOjE2ODA0Mzc4Mzd9.wfaLXgzcuucfKVf5G2-x8bJYw8BDWELMopv32QZPl2I";

// const data = jwt.verify(token, "secret123");
// console.log(data);

let data;
try {
  data = jwt.verify(token, "secret123");
  console.log(data);
} catch (error) {
  console.log(error.message);
}
