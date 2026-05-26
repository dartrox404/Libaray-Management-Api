const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  bookname: { type: String, required: true },
  bookauthor: { type: String, required: true },
  expdate: Number,
  intialdate: Number,
  year: Number,
});
module.exports = mongoose.model("libraryDataBase", userschema);
