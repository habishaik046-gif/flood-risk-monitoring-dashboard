const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  waterLevel: { type: Number, required: true }, // meters
  rainfall: { type: Number, required: true },   // mm/hr
  riskLevel: { 
    type: String, 
    enum: ['LOW', 'MODERATE', 'HIGH', 'CRITICAL'],
    default: 'LOW'
  },
  sensorStatus: { type: String, enum: ['ONLINE', 'OFFLINE'], default: 'ONLINE' },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', LocationSchema);