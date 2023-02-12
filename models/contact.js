const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    message: { type: String }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", ContactSchema);
