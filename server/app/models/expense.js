const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  expenseDate: {
    type: Date,
    required: true,
  },

  categoryName: {
    type: String,
    required: true,
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
