const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// GET all users
router.get("/", UserController.getAllUsers);

// GET form to create new user
router.get("/create", UserController.createUserForm);

// POST create new user
router.post("/create", UserController.createUser);

// GET form to edit user
router.get("/edit/:id", UserController.editUserForm);

// POST update user
router.post("/edit/:id", UserController.updateUser);

// GET delete user
router.get("/delete/:id", UserController.deleteUser);

module.exports = router;
