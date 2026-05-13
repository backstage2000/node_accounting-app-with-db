const express = require('express');
const {
  getAll,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('./User.controller');
const usersRouter = express.Router();

usersRouter.get('/', getAll);
usersRouter.post('/', createUser);
usersRouter.get('/:id', getUserById);
usersRouter.patch('/:id', updateUser);
usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;
