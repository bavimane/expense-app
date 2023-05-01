const express = require("express");
const cors = require("cors");
const configureDB = require("./config/database");
const router = require("./config/routes");
const PORT = 3066;

const app = express();
configureDB();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
