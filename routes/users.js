const usersRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");

const { findAllUsers, createUser, findUserById, checkEmptyNameAndEmailAndPassword, checkIsUserExists,
  updateUser, deleteUser, checkEmptyNameAndEmail, filterPassword, hashPassword } = require('../middlewares/users');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated,
  sendUserDeleted, sendMe } = require('../controllers/users');

usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
usersRouter.get('/games/:id', findUserById, filterPassword, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;

