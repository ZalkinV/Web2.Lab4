const { Router } = require("express");
const router = Router();

const { getAllFavourites, createFavourite, deleteFavourite } = require("../services/favourites");
const { fetchWeatherByCityName } = require("../services/weather");


router.get("/", async (req, res) => {
  try {
    const favourites = await getAllFavourites();
    res.status(200).json(favourites);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const forecast = await fetchWeatherByCityName(req.body.cityName);

    const created = await createFavourite(forecast.name);
    res.status(200).json({ created, forecast });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const deleted = await deleteFavourite(req.body.cityName);
    res.status(200).json(deleted);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
