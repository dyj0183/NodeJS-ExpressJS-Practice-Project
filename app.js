const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const rootDir = require("./helper/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// We can still use all the routes as a middleware here
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "404.html"));
});

// listen to request on localhost 3000
app.listen(3000);
