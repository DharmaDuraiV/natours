const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
dotenv.config({ path: './config.env' });
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
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running @ http://localhost:${port}`);
});
