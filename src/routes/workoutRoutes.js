const express = require('express');
const router = express.Router();

// Base de datos en memoria (Mock)
let workouts = [];

router.get('/', (req, res) => {
    res.send('Ruta de Workouts funcionando');
});

module.exports = router;