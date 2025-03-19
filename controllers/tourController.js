const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

exports.checkId = (req, res, next, val) => {
  console.log(`the id is :${val}`);
  if (req.params.id * 1 > tours.length) {
    return res.status(400).json({
      status: 'failed',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  console.log(req.body.name, req.body.price);
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing field name and price ....!😏',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.requestedTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestedTime,
    result: tours.length,
    tours: tours,
  });
};
exports.getSingleTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: { tour },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          newTour,
        },
      });
    }
  );
};
exports.updateSingleTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: '<updated sucessfully...!>',
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    message: '<Deleted sucessfully...!>',
  });
};
