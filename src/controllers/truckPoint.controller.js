const TruckPoint = require('../models/truckPoint.model.js');
const mongoose = require('mongoose');



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

// Get a single TruckPoint by ID
// GET /api/truck-points/:id
const getTruckPointById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de TruckPoint no vàlid' });
        }

        const truckPoint = await TruckPoint.findById(id);
        if (!truckPoint) {
            return res.status(404).json({ message: 'TruckPoint no trobat' });
        }
        res.status(200).json(truckPoint);
    } catch (error) {
        res.status(500).json({ message: 'Error en obtenir el TruckPoint', error: error.message });
    }
};

// Update a TruckPoint by ID
// PUT /api/truck-points/:id
const updateTruckPoint = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de TruckPoint no vàlid' });
        }

        const updatedTruckPoint = await TruckPoint.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedTruckPoint) {
            return res.status(404).json({ message: 'TruckPoint no trobat per actualitzar' });
        }
        res.status(200).json(updatedTruckPoint);
    } catch (error) {
        res.status(400).json({ message: 'Error en actualitzar el TruckPoint', error: error.message });
    }
};

// Delete a TruckPoint by ID
// DELETE /api/truck-points/:id
const deleteTruckPoint = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de TruckPoint no vàlid' });
        }

        const deletedTruckPoint = await TruckPoint.findByIdAndDelete(id);

        if (!deletedTruckPoint) {
            return res.status(404).json({ message: 'TruckPoint no trobat per eliminar' });
        }
        res.status(200).json({ message: 'TruckPoint eliminat correctament' });
    } catch (error) {
        res.status(500).json({ message: 'Error en eliminar el TruckPoint', error: error.message });
    }
};

module.exports = {
    createTruckPoint,
    getAllTruckPoints,
    getTruckPointById,
    updateTruckPoint,
    deleteTruckPoint,
};