const Tour = require('../model/tourSchema');

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

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: 'success',
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: 'Invalid Data',
    });
  }
};
exports.getSingleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: { tour },
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: 'Invalid Data',
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        newTour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: 'Invalid Data',
    });
  }
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
