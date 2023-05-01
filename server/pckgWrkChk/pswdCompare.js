const bcryptjs = require("bcryptjs");

const encrypted =
  "$2a$10$peiaufCmioDreDukuSTT2eWipquweXRCMPX5BzdMmPWCVeD5i4Vpq";
const inputPassword = "secret123";

bcryptjs.compare(inputPassword, encrypted).then((match) => {
  console.log(match);
});
