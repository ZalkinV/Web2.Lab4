const { Router } = require("express");
const router = Router();

const Favourite = require("../models/favourites");


router.get("/", async (req, res) => {
    const favourites = await Favourite.find();
    res.status(200)
        .send(favourites);
});

router.post("/", async (req, res) => {
    const favourite = new Favourite({
        cityName: req.body.cityName
    });
    const savedFavourite = await favourite.save();

    res.status(200)
        .json(savedFavourite);
});

router.delete("/", async (req, res) => {
    await Favourite.deleteOne({ cityName: req.body.cityName });

    res.status(200)
        .send(req.body);
});


module.exports = router;
