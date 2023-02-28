const mongoose = require("mongoose");

const artistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    deleteRequest: {
      type: String,
    },
    deleteRequestMsg: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("artist", artistSchema);
