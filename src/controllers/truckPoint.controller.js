const TruckPoint = require('../models/truckPoint.model.js');
const mongoose = require('mongoose');
const asyncHandler = require('../middleware/asyncHandler.js');


// Create a new TruckPoint
// POST /truckPoints
const createTruckPoint = asyncHandler(async (req, res) => {
    const truckPoint = new TruckPoint(req.body);
    const savedTruckPoint = await truckPoint.save();
    res.status(201).send(savedTruckPoint);
});

// Get all TruckPoints
// GET /api/truckPoints
const getAllTruckPoints = asyncHandler(async (req, res) => {
    const truckPoints = await TruckPoint.find();
    res.status(200).json(truckPoints);
});

// Get a single TruckPoint by ID
// GET /api/truck-points/:id
const getTruckPointById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('ID de TruckPoint no vàlid');
    }

    const truckPoint = await TruckPoint.findById(id);
    if (!truckPoint) {
        res.status(404);
        throw new Error('TruckPoint no trobat');
    }
    res.status(200).json(truckPoint);
});

// Update a TruckPoint by ID
// PUT /api/truck-points/:id
const updateTruckPoint = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('ID de TruckPoint no vàlid');
    }

    const updatedTruckPoint = await TruckPoint.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!updatedTruckPoint) {
        res.status(404);
        throw new Error('TruckPoint no trobat per actualitzar');
    }
    res.status(200).json(updatedTruckPoint);
});

// Delete a TruckPoint by ID
// DELETE /api/truck-points/:id
const deleteTruckPoint = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('ID de TruckPoint no vàlid');
    }

    const deletedTruckPoint = await TruckPoint.findByIdAndDelete(id);

    if (!deletedTruckPoint) {
        res.status(404);
        throw new Error('TruckPoint no trobat per eliminar');
    }
    res.status(200).json({ message: 'TruckPoint eliminat correctament' });
});

module.exports = {
    createTruckPoint,
    getAllTruckPoints,
    getTruckPointById,
    updateTruckPoint,
    deleteTruckPoint,
};