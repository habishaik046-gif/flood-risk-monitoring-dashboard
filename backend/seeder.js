const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Location = require('./models/Location');

dotenv.config();

const sampleLocations = [
  { name: "Delta Sector 4", region: "North Zone", coordinates: { lat: 28.6139, lng: 77.2090 }, waterLevel: 4.8, rainfall: 85, riskLevel: "CRITICAL" },
  { name: "River Basin East", region: "East Basin", coordinates: { lat: 28.5355, lng: 77.3910 }, waterLevel: 3.2, rainfall: 55, riskLevel: "HIGH" },
  { name: "Metro Canal 12", region: "Urban Center", coordinates: { lat: 28.7041, lng: 77.1025 }, waterLevel: 2.1, rainfall: 30, riskLevel: "MODERATE" },
  { name: "South Reservoir", region: "South Hills", coordinates: { lat: 28.4595, lng: 77.0266 }, waterLevel: 0.9, rainfall: 10, riskLevel: "LOW" }
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Location.deleteMany();
    await Location.insertMany(sampleLocations);
    console.log("Flood risk seed data successfully inserted!");
    process.exit();
  } catch (err) {
    console.error(`Error with seed: ${err}`);
    process.exit(1);
  }
};

importData();