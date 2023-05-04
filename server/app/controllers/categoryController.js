const Catagory = require("../models/catagory");

const categoryController = {};

categoryController.list = (request, response) => {
  Catagory.findOne({ _id: request.user._id })
    .then((category) => {
      response.json(category);
    })
    .catch((error) => {
      response.json(error);
    });
};

categoryController.create = (request, response) => {
  const body = request.body;
  body._id = request.user._id;
  const category = new Catagory(body);
  category
    .save()
    .then((category) => {
      response.json(category);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

categoryController.destroy = (request, response) => {
  const id = request.params.id;
  Catagory.findOneAndDelete({ _id: id, userId: request.user._id })
    .then((category) => {
      response.json(category);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

categoryController.update = (request, response) => {
  const id = request.params.id;
  const body = request.body;
  Catagory.findByIdAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true,
  })
    .then((category) => {
      response.json(category);
    })
    .catch((error) => {
      response.json(error.message);
    });
};

module.exports = categoryController;
