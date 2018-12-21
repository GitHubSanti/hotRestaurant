// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Routes
// ===========================================================
app.get("/makereservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

var reservations = {};
var waiting = {};

// Listener
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = {};
var waiting = {};

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

