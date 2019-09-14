// explanation of file
// everything in mongoose starts with a Schema.
// each schema maps to a mongoDB collection and defines the shape of hte documents within that collection.
// each key in the code below defines a property in the documents which will be cast to its associated SchemaType.
// keys may also be assigned nested objects containing further key/type definitions.
// everything in mongoose starts with a Schema, each schema maps to a mongoDB collection and defines the shape of hte documents within that collection.
// Schemas not only define the structure of your document and casting of properties, they also define document instance methods, static Model methods, compound indexes, and document lifecycle hooks called middleware.
// to use the schema definition, we need to convert our bookSchema into a Model we can work with.
// to do so, we pass it into mongoose.model(modelName, schema);
// Mongoose supports arrays of SchemaTypes and arrays of subdocuments.
// Arrays of SchemaTypes are also called primitive arrays, and arrays of subdocuments are also called document arrays.

// https://www.googleapis.com/books/v1/volumes?q=burger
// property names to get are title, subtitle, authors, description, thumbnail, id, infoLink
// for clarity, use googleId instead of id, image instead of thumbnail, link instead of infoLink

// standard way to define a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  authors: { type: [String], required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// questions

// if a book has multiple authors, would this schema work?
// the way to solve this is to model the author key in a way that accepts arrays
