const express = require("express");
const db = require("../config/database");
const route = require("../routes/approute");
require("dotenv").config();

const app = express();

app.use(express.json());

db();

app.use("/api", route);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
