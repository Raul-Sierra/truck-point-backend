const mongoose = require('mongoose');

const truckPointSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
        description: String,
    },
    {
        timestamps: true,
    }
);

const TruckPoint = mongoose.model('TruckPoint', truckPointSchema);

module.exports = TruckPoint;