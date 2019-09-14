const router = require("express").Router();
const bookRoutes = require("./books");
const googleBooks = require("./googleBooks.js");

// book routes
router.use("/books", bookRoutes);
router.use("/googleBooks", googleBooks);

module.exports = router;
