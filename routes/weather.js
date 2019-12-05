const { Router } = require("express");
const router = Router();

const api = require("../api");


router.get("/", async (req, res) => {
  try {
    const cityName = req.query.cityName;
    
    const forecast = await api.fetchWeatherByCityName(cityName);
    res.status(200).json(forecast);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
});

router.get("/coordinates", async (req, res) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;

    const forecast = await api.fetchWeatherByCoords(lat, lon);
    res.status(200).json(forecast);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
