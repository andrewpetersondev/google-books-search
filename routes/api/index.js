const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleBooksRoutes = require("./googleBooks.js");

// book routes for /api/books
router.use("/books", bookRoutes);

// google routes for /api/books
router.use("/googleBooks", googleBooksRoutes);

// if no api routes are hit, send the react app to the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
