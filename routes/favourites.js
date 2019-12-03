const { Router } = require("express");
const router = Router();

const { getAllFavourites, createFavourite, deleteFavourite } = require("../services/favourites");


router.get("/", async (req, res) => {
  try {
    const favourites = await getAllFavourites();
    res.status(200).json(favourites);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const created = await createFavourite(req.body.cityName);
    res.status(200).json(created)
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    const deleted = await deleteFavourite(req.body.cityName);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;
