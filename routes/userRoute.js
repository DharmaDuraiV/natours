const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const userRouter = express.Router();

userRouter.post('/signup', authController.signup);
userRouter.post('/login', authController.login);
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
