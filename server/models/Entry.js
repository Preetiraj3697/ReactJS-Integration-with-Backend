// models/Entry.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  data: { type: String, required: true },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
