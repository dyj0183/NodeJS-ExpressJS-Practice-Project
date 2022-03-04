const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const rootDir = require("./helper/path");

const adminRoutes = require("./routes/admin");
const homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({ extended: false }));
// This is used for serving static files in the public folder
app.use(express.static(path.join(__dirname, "public")));

// We can still use all the routes as a middleware here
app.use(adminRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "404.html"));
});

// listen to request on localhost 3000
app.listen(3000);
