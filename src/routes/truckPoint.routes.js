const express = require('express');
const {
    createTruckPoint,
    getAllTruckPoints,
} = require('../controllers/truckPoint.controller.js');

const router = express.Router();

router.route('/').post(createTruckPoint).get(getAllTruckPoints);

module.exports = router;