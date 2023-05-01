const validator = require("validator");
const isEmail = require("validator/lib/isEmail");

console.log(validator.isEmail("hari@gmail.com"));

console.log(isEmail("harish@gmail.com"));
