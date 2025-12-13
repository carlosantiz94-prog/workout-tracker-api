const express = require('express');
const router = express.Router();

// Mock Data
let exercises = [
    { id: 1, name: 'Push Up', muscle: 'Chest' },
    { id: 2, name: 'Squat', muscle: 'Legs' }
];

router.get('/', (req, res) => {
    res.json(exercises);
});

router.get('/:id', (req, res) => {
    const exercise = exercises.find(e => e.id == req.params.id);
    if (exercise) res.json(exercise);
    else res.status(404).json({ error: 'Exercise not found' });
});

router.post('/', (req, res) => {
    const newExercise = {
        id: exercises.length + 1,
        name: req.body.name,
        muscle: req.body.muscle
    };
    exercises.push(newExercise);
    res.status(201).json({ message: 'Exercise created', data: newExercise });
});

module.exports = router;