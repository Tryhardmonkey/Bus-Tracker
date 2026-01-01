const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Bus location API (mock data)
app.get("/api/location/bus/:busId", (req, res) => {
  const busId = req.params.busId;

  // Temporary hardcoded coordinates (Chandigarh example)
  const response = {
    busId: busId,
    lat: 30.7333,
    lng: 76.7794,
    accuracy: 500,
    source: "MOCK",
    confidence: "HIGH",
    timestamp: Date.now()
  };

  res.json(response);
});


// PORT
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
