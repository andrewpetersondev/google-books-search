const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// matches with "/api/books"
router.route("/").get(googleController.findAll);

module.exports = router;
