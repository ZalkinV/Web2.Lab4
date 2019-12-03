const { Router } = require("express");
const router = Router();


router.get("/", async (req, res) => {
  res.sendStatus(200);
});

router.get("/coordinates", async (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
