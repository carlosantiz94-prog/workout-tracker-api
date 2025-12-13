const express = require('express');
const router = express.Router();

let exercises = [];

router.get('/', (req, res) => res.send('Endpoint Exercises funcionando'));

module.exports = router;