const { Router } = require("express");
const router = Router();

const { getAllFavourites, createFavourite, deleteFavourite } = require("../services/favourites");


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
    const created = await createFavourite(req.body.cityName);
    res.status(200).json(created)
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
