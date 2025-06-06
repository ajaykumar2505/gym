const express = require('express');
const path = require('path');
const app = express();
const MongoDB = require('./db');
const cors = require('cors');
require('dotenv').config();
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, '../client'))); // Serve static files
app.use(cors({
  origin: 'https://gym-1-3374.onrender.com', // your frontend domain
  credentials: true, // if you use cookies or authorization headers
}));

// Database connection
MongoDB();

// Routes
app.use('/api', require("./routes/userrouter")); // User creation routes
app.use('/api', require("./routes/WorkoutsModel")); // Workout details routes
app.use('/api', require("./routes/personworkout")); // myWorkout details routes
app.use('/api',require("./routes/Savedworkout"))



// Start server
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});
