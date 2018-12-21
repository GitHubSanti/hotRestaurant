// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Routes
// ===========================================================
app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });

  // Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

