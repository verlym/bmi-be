const { v4: uuidv4 } = require('uuid');
const BmiRecord = require('../models/bmi');

class BmiRepository {
  constructor() {
    this.records = [];
  }

  async create(height, weight, bmi, category) {
    const record = new BmiRecord(uuidv4(), height, weight, bmi, category);
    this.records.push(record);
    return record;
  }

  async findAll() {
    return this.records;
  }

  async findById(id) {
    return this.records.find(record => record.id === id);
  }
}

module.exports = new BmiRepository();