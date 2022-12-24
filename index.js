const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);
