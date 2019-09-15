const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(({ data: { results } }) => res.json(results))
      .catch(err => res.status(422).json(err));
  }
};

// explanation
// this file has one method that finds all of the books in googles books api
// this find all method should probably make sure that each book has a title, author, image, etc
// data is imported from the model analyzed in here (in the controller) and sent to the view

// res.data.items.filter should make sure that each book has required data
