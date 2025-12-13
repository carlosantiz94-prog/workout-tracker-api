const express = require('express');
const router = express.Router();

// Mock Data
let workouts = [
    { id: 1, name: 'Full Body', mode: 'Hard', equipment: ['dumbbell', 'bench'] },
    { id: 2, name: 'Cardio Blast', mode: 'Easy', equipment: ['treadmill'] }
];

// GET: Listar todos
router.get('/', (req, res) => {
    res.json(workouts);
});

// GET: Obtener por ID
router.get('/:id', (req, res) => {
    const workout = workouts.find(w => w.id == req.params.id);
    if (workout) res.json(workout);
    else res.status(404).json({ error: 'Workout not found' });
});

// POST: Crear nuevo workout
router.post('/', (req, res) => {
    const newWorkout = {
        id: workouts.length + 1,
        name: req.body.name,
        mode: req.body.mode,
        equipment: req.body.equipment
    };
    workouts.push(newWorkout);
    res.status(201).json({ message: 'Workout created', data: newWorkout });
});

module.exports = router;