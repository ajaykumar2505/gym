const express = require('express');
const WorkoutModel = require('../models/workouts');
const router = express.Router();

router.post('/savedworkoutdetails', async (req, res) => {
    const { workoutid } = req.body;

    try {
        const workout = await WorkoutModel.findById(workoutid);

        if (!workout) {
            return res.status(404).json({
                message: "Workout not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Successfully retrieved workout",
            success: true,
            data: workout
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error",
            success: false
        });
    }
});

module.exports = router;
