const express = require('express');
const router = express.Router();

// Datos simulados (Mock)
let users = [
    { id: 1, name: 'Carlos', email: 'carlos@gmail.com' },
    { id: 2, name: 'Ana', email: 'ana@gmail.com' },
    { id: 3, name: 'Juan', email: 'juan@gmail.com' },
    { id: 4, name: 'Pedro', email: 'pedro@gmail.com' },
];

// GET Listar todos
router.get('/', (req, res) => {
    res.json(users);
});

// GET Uno por ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) res.json(user);
    else res.status(404).send('User not found');
});

module.exports = router;