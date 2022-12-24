const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Middlewares
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT, () =>
  console.log("Server up and running at PORT: " + process.env.PORT)
);
