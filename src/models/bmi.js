class BmiRecord {
    constructor(id, height, weight, bmi, category) {
      this.id = id;
      this.height = height;
      this.weight = weight;
      this.bmi = bmi;
      this.category = category;
      this.createdAt = new Date();
    }
  }
  
  module.exports = BmiRecord;