const { Router } = require("express");
const router = Router();

const Favourite = require("../models/favourites");


router.get("/", (req, res) => {
  Favourite.find()
    .then(favourites =>
      res.status(200).json(favourites))
    .catch(error =>
      res.status(400).json(error));
});

router.post("/", (req, res) => {
  new Favourite({
    cityName: req.body.cityName
  }).save()
    .then(saved =>
      res.status(200).json(saved))
    .catch(error =>
      res.status(400).json(error));
});

router.delete("/", (req, res) => {
  Favourite.findOneAndDelete({ cityName: req.body.cityName })
    .then(deleted =>
      res.status(200).json(deleted))
    .catch(error =>
      res.status(400).json(error));
});


module.exports = router;
