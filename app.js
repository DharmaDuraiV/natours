const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourController');
const userRouter = require('./routes/userRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middeleware 😍');
  next();
});
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
