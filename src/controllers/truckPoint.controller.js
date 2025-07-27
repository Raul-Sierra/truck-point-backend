const TruckPoint = require('../models/truckPoint.model.js');



// Create a new TruckPoint
// POST /truckPoints
const createTruckPoint = async (req, res) => {
    try {
        const truckPoint = new TruckPoint(req.body);
        const savedTruckPoint = await truckPoint.save();
        res.status(201).send(savedTruckPoint);
    } catch (error) {
        res.status(400).json({ message: 'Error en crear el TruckPoint', error: error.message });
    }
};

// Get all TruckPoints
// GET /api/truckPoints
const getAllTruckPoints = async (req, res) => {
    try {
        const truckPoints = await TruckPoint.find();
        res.status(200).json(truckPoints);
    } catch (error) {
        res.status(500).json({ message: 'Error en obtenir els TruckPoints', error: error.message });
    }
};

module.exports = {
    createTruckPoint,
    getAllTruckPoints,
};