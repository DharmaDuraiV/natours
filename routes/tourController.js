const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// router.param('id', tourController.checkId);

router
  .route('/top-5-cheap')
  .get(tourController.getTop5Tours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourstats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getSingleTour)
  .patch(tourController.updateSingleTour)
  .delete(tourController.deleteTour);

module.exports = router;
