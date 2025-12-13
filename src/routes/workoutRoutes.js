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

// PUT: Actualizar completamente
router.put('/:id', (req, res) => {
    const index = workouts.findIndex(w => w.id == req.params.id);
    if (index !== -1) {
        workouts[index] = { id: parseInt(req.params.id), ...req.body };
        res.status(200).json({ message: 'Workout updated fully', data: workouts[index] });
    } else {
        res.status(404).json({ error: 'Workout not found' });
    }
});

// PATCH: Actualizar parcialmente (ej: solo el nombre)
router.patch('/:id', (req, res) => {
    const workout = workouts.find(w => w.id == req.params.id);
    if (workout) {
        if(req.body.name) workout.name = req.body.name;
        if(req.body.mode) workout.mode = req.body.mode;
        res.status(200).json({ message: 'Workout updated partially', data: workout });
    } else {
        res.status(404).json({ error: 'Workout not found' });
    }
});

// DELETE: Borrar workout
router.delete('/:id', (req, res) => {
    const initialLength = workouts.length;
    workouts = workouts.filter(w => w.id != req.params.id);
    
    if (workouts.length < initialLength) {
        res.status(204).send(); // 204 No Content
    } else {
        res.status(404).json({ error: 'Workout not found' });
    }
});

module.exports = router;