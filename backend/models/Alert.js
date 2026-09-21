const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
  title: { type: String, required: true },
  severity: { type: String, enum: ['INFO', 'WARNING', 'CRITICAL'], required: true },
  locationName: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Alert', AlertSchema);