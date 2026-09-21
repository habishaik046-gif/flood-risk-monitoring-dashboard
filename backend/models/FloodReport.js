const mongoose = require('mongoose');

const FloodReportSchema = new mongoose.Schema({
  reporterName: { type: String, required: true },
  locationName: { type: String, required: true },
  waterHeightCm: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  status: { type: String, enum: ['PENDING', 'VERIFIED', 'RESOLVED'], default: 'PENDING' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FloodReport', FloodReportSchema);