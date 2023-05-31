const express = require("express");
const router = express.Router();
const { getUserWithCity } = require("../controllers/userController");

router.get("/user/:id", getUserWithCity);

module.exports = router;
