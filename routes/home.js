const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../helper/path");
const adminData = require("./admin");

// only will be hit if it is a get method
router.get("/", (req, res, next) => {
	console.log(adminData.apartments);
	res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;
