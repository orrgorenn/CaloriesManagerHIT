/*
Codeowners:
Orr Goren - 205816341
Tal Tubul - 208835355
*/
const mongoose = require("mongoose");

const caloriesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("calories", caloriesSchema);
