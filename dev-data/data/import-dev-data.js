const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('./../../model/tourSchema');
const fs = require('fs');
// console.log(Tour);

const tour = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);
console.log(tour);

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

console.log(process.argv);

const importall = async () => {
  try {
    await Tour.create(tour);
    console.log('created successfully...!');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

const deleteall = async () => {
  try {
    await Tour.deleteMany();
    console.log('deleted successfully...!');
  } catch (error) {
    cl;
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importall();
} else if (process.argv[2] === '--delete') {
  deleteall();
}
