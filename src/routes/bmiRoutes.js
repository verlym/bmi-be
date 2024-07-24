const express = require('express');
const bmiController = require('../controllers/bmiController');

const router = express.Router();

router.post('/calculate', bmiController.calculateBMI);
router.get('/records', bmiController.getAllBMIRecords);
router.get('/records/:id', bmiController.getBMIRecordById);

module.exports = router;