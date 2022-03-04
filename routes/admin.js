const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../helper/path");

router.get("/add-apartment", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-apartment.html"));
});

module.exports = router;
