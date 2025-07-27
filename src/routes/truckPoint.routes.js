const express = require('express');
const {
    createTruckPoint,
    getAllTruckPoints,
    getTruckPointById,
    updateTruckPoint,
    deleteTruckPoint,
} = require('../controllers/truckPoint.controller.js');
const { validateTruckPoint } = require('../validators/truckPoint.validator.js');

const router = express.Router();

router.route('/')
    .post(validateTruckPoint, createTruckPoint)
    .get(getAllTruckPoints);

router.route('/:id')
    .get(getTruckPointById)
    .put(validateTruckPoint, updateTruckPoint)
    .delete(deleteTruckPoint);

module.exports = router;