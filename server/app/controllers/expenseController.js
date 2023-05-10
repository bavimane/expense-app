const Expense = require("../models/expense");

const expenseController = {};

expenseController.show = (request, response) => {
  Expense.find()
    .then((expense) => {
      response.json(expense);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

expenseController.create = (request, response) => {
  const body = request.body;
  body.userId = request.user._id;
  const expense = new Expense(body);
  expense
    .save()
    .then((expense) => {
      response.json(expense);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

expenseController.destroy = (request, response) => {
  const id = request.params.id;
  Expense.findByIdAndDelete({ _id: id })
    .then((expense) => {
      response.json(expense);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

expenseController.update = (request, response) => {
  const id = request.params.id;
  const body = request.body;
  Expense.findByIdAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true,
  })
    .then((expense) => {
      response.json(expense);
    })
    .catch((error) => {
      response.json(error);
    });
};

module.exports = expenseController;
