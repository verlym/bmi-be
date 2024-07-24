function calculateBMI(height, weight) {
    const bmi = weight / ((height / 100) ** 2);
    return parseFloat(bmi.toFixed(2));
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }
  
  module.exports = { calculateBMI, getBMICategory };