const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/coordinates", async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
