const Location = require('../models/Location');

// Get all monitored locations
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new location
exports.createLocation = async (req, res) => {
  try {
    const { name, region, coordinates, waterLevel, rainfall } = req.body;
    
    // Auto-calculate risk level
    let riskLevel = 'LOW';
    if (waterLevel > 4.5 || rainfall > 80) riskLevel = 'CRITICAL';
    else if (waterLevel > 3.0 || rainfall > 50) riskLevel = 'HIGH';
    else if (waterLevel > 1.8 || rainfall > 20) riskLevel = 'MODERATE';

    const newLocation = new Location({
      name,
      region,
      coordinates,
      waterLevel,
      rainfall,
      riskLevel
    });

    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};