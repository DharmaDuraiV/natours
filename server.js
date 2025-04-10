const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = require('./app');

// console.log(process.env);

// const Db = process.env.MONGODB_URL;
const Db = process.env.MONGODB_GLOBLE.replace(
  '<PASSWORD>',
  process.env.MONGODB_PASSWORD
);
mongoose.connect(Db).then(() => {
  console.log('connected to mongodb ');
  // console.log(con.connections);
});

const port = process.env.PORT || 8000;
const server = app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running @ http://localhost:${port}`);
});
process.on('uncaughtException', (err) => {
  console.log(err.name, ',', err.message);
  console.log('UNCAUGHT EXCEPTION ! 😨...');
});

// console.log(x);

process.on('unhandledRejection', (err) => {
  console.log(err.name, ',', err.message);
  console.log('UNHANDLER REJECTON ! 💥 shutting down ...');

  server.close(() => {
    process.exit(1);
  });
});
