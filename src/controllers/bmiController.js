const bmiService = require('../services/bmiService');

class BmiController {
  async calculateBMI(req, res) {
    const { height, weight } = req.body;
    
    if (!height || !weight) {
      return res.status(400).json({ error: 'Height and weight are required' });
    }

    try {
      const bmiRecord = await bmiService.calculateAndSaveBMI(height, weight);
      res.status(201).json(bmiRecord);
    } catch (error) {
      res.status(500).json({ error: 'Failed to calculate BMI' });
    }
  }

  async getAllBMIRecords(req, res) {
    try {
      const records = await bmiService.getAllBMIRecords();
      res.json(records);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve BMI records' });
    }
  }

  async getBMIRecordById(req, res) {
    const { id } = req.params;
    try {
      const record = await bmiService.getBMIRecordById(id);
      if (record) {
        res.json(record);
      } else {
        res.status(404).json({ error: 'BMI record not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve BMI record' });
    }
  }
}

module.exports = new BmiController(); 