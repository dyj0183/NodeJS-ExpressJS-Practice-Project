const express = require("express");
const path = require("path");

const router = express.Router();

// only will be hit if it is a get method
router.get("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
