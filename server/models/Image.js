const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    user: {
      _id: { type: mongoose.Types.ObjectId, required: true, index: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
    },
    items: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("image", ImageSchema);
