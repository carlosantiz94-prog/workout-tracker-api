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

module.exports = router;