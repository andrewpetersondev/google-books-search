// npm packages
const express = require("express");
const mongoose = require("mongoose");

// node packages
const path = require("path");

// other requirements for server
// const apiRoutes = require("./routes/apiRoutes");
const routes = require("./routes");

// express configuration
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// activity 7
// Use apiRoutes
// app.use("/api", apiRoutes);

// activity 11 react router
// add routes, both API and view
app.use(routes);

// activity 7
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// connect to mongo db
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// start the API server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
