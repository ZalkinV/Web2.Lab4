const { Router } = require("express");
const router = Router();

const { getAllFavourites, createFavourite, deleteFavourite } = require("../services/favourites");
const api = require("../api");


router.get("/", async (req, res) => {
  try {
    const favourites = await getAllFavourites();
    res.status(200).json(favourites);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const forecast = await api.fetchWeatherByCityName(req.body.cityName);

    const created = await createFavourite(forecast.name);
    res.status(200).json({ created, forecast });
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    const deleted = await deleteFavourite(req.body.cityName);
    res.status(200).json(deleted);
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});


module.exports = router;
