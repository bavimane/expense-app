const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/userController");
const categoryController = require("../app/controllers/categoryController");
const budgetController = require("../app/controllers/budgetController");
const expenseController = require("../app/controllers/expenseController");
const { authenticateUser } = require("../app/middleware/authentication");

//User API's

router.get("/api/user", authenticateUser, userController.list);
router.post("/api/user/register", userController.register);
router.post("/api/user/login", userController.login);
router.get("/api/user/profile", authenticateUser, userController.profile);

//Categories API's

router.get("/api/categories", authenticateUser, categoryController.list);
router.post("/api/categories", authenticateUser, categoryController.create);
router.delete(
  "/api/categories/delete/:id",
  authenticateUser,
  categoryController.destroy
);
router.put(
  "/api/categories/update/:id",
  authenticateUser,
  categoryController.update
);

//Budget API's

router.get("/api/budget", authenticateUser, budgetController.show);
router.post("/api/budget", authenticateUser, budgetController.create);
router.delete(
  "/api/budget/delete/:id",
  authenticateUser,
  budgetController.destroy
);
router.put("/api/budget/update/:id", authenticateUser, budgetController.update);

//Expense API's

router.get("/api/expense", expenseController.show);
router.post("/api/expense", authenticateUser, expenseController.create);
router.delete(
  "/api/expense/delete/:id",
  authenticateUser,
  expenseController.destroy
);

router.put(
  "/api/expense/update/:id",
  authenticateUser,
  expenseController.update
);

module.exports = router;
