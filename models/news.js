const mongoose = require("mongoose");

const MaruzaSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    video: { type: String, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Maruza", MaruzaSchema);
