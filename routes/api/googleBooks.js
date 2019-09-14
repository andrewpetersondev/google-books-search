const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// matches with "/api/books"
router.route("/").get(googleController.findAll);

// matches with "/api/books/:id"
router
  .route("/:id")
  .get(googleController.findById)
  .put(googleController.update)
  .delete(googleController.remove);

module.exports = router;
