const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
  try {
    const cityName = req.query.cityName;
    res.status(200).send(cityName);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/coordinates", async (req, res) => {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    res.status(200).send({ lat, lon });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
