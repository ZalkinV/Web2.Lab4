const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({ cities: ["fake1", "fake2"] });
});

router.post("/", (req, res) => {
    res.status(200).json(req.body);
});


module.exports = router;
