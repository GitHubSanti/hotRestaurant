// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Listener
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waiting = [];

// Routes
// ===========================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

app.get("/makereservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waiting);
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/api/isreservelistfull", function(req, res) {
  if(reservations.length >= 5) {
    return res.json(true);
  }
  else {
    return res.json(false);
  }
});

app.post("/api/tables", function(req, res) {
  var newReservation = req.body;
  reservations.push(newReservation);
  console.log(reservations);
  res.json(newReservation);
});

app.post("/api/waitlist", function(req, res) {
  var newWaiting = req.body;
  waiting.push(newWaiting);
  console.log(waiting);
  res.json(newWaiting);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
