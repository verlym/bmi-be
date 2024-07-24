const bmiRepository = require('../repositories/bmiRepository');
const { calculateBMI, getBMICategory } = require('../utils/bmiCalculator');

class BmiService {
  async calculateAndSaveBMI(height, weight) {
    const bmi = calculateBMI(height, weight);
    const category = getBMICategory(bmi);
    return bmiRepository.create(height, weight, bmi, category);
  }

  async getAllBMIRecords() {
    return bmiRepository.findAll();
  }

  async getBMIRecordById(id) {
    return bmiRepository.findById(id);
  }
}

module.exports = new BmiService();