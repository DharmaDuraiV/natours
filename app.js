const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globleErrorHandler = require('./controllers/errorController');

const tourRouter = require('./routes/tourController');
const userRouter = require('./routes/userRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware ...😍');
  next();
});

app.use('/api/v1/tour', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(globleErrorHandler);
module.exports = app;
