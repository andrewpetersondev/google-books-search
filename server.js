// npm packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add routes, both API and view
const routes = require("./routes");
app.use(routes);

// connect to mongo db
const uri = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB database connection established successfully");
});

// start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
