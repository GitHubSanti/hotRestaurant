// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Routes
// ===========================================================
app.get("/makereservation", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });
  
var reservations = {};
var waiting = {};

// Listener
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

