const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(userController.getAllusers)
  .post(userController.createSingleUser);
userRouter
  .route('/:id')
  .get(userController.getSingleusers)
  .patch(userController.updateSingleUser)
  .delete(userController.deleteSingleUser);

module.exports = userRouter;
