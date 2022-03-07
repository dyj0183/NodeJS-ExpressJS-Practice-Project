const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../helper/path");

const all_apartments = [];

// Get route to show the form
// /add-product => GET
router.get("/add-apartment", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-apartment.html"));
});

// If users submit the form, will come to this POST route
// /add-product => POST
router.post("/add-apartment", (req, res, next) => {
	// Get the body data
	all_apartments.push({ title: req.body.title });
	// Redirect back to Home page
	res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.apartments = all_apartments;
