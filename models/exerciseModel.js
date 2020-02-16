const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    workouts : [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter the exercise activity"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for the exercise"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter the length of the exercise"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;