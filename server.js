const express = require('express');
const dotenv = require('dotenv');
const truckPointRoutes = require('./src/routes/truckPoint.routes.js');
const connectDB = require('./src/config/database.js');
const { errorHandler } = require('./src/middleware/errorHandler.js');


// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();


// Middleware to parse JSON bodies
app.use(express.json());

// Add a root route for basic "is it alive?" checks
app.get('/', (req, res) => {
    res.send('<h1>Truck Point API</h1><p>API is running...</p>');
});

// Routes
app.use('/api/truck-points', truckPointRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});