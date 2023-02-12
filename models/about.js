const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    video: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", AboutSchema);
