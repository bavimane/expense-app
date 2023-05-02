const Budget = require("../models/budget");

const budgetController = {};

budgetController.show = (request, response) => {
  Budget.findOne({ userId: request.user._id })
    .then((budget) => {
      response.json(budget);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

budgetController.create = (request, response) => {
  const body = request.body;
  body.userId = request.user._id;
  const budget = new Budget(body);
  budget
    .save()
    .then((budget) => {
      response.json(budget);
    })
    .catch((error) => {
      response.status(400).json(error.message);
    });
};

budgetController.destroy = (request, response) => {
  const id = request.params.id;
  Budget.findOneAndDelete({ _id: id, userId: request.user._id })
    .then((budget) => {
      response.json(budget);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

budgetController.update = (request, response) => {
  const id = request.params.id;
  const body = request.body;
  Budget.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((budget) => {
      response.json(budget);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

module.exports = budgetController;
