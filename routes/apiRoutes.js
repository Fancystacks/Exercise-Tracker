var express = require('express');
var router = express.Router();
const Workout = require("../models/exerciseModel");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, {
      $push: { exercises: body },
    })
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router