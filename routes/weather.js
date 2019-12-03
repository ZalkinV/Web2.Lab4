const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
  try {
    const cityName = req.query.cityName;
    res.status(200).json(cityName);
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

router.get("/coordinates", async (req, res) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    res.status(200).json({ lat, lon });
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

module.exports = router;
