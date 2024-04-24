const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("GET request in places");
  res.json({ message: "It works!" });
});

module.exports = router;
