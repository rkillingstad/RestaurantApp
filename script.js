
var reservations = [
    {
      name: " ", 
      numberInParty: " ",
      table: "One"  
     
    },
    {
      name: " ",
      numberInParty: " ",
      table: "Two" 
     
    },
    {
      name: " ",
      numberInParty: " ",
      table: "Three" 
      
    },
    {
      name: " ",
      numberInParty: " ",
      table: "Four"
      
    },
    {
      name: " ",
      numberInParty: " ",
      table: "Five"
     
    },
  
  ];

  var waitlist = [
    {
      name: " ",
      numberInParty: " ",
    },
    {
      name: " ",
      numberInParty: " ",
    },
    {
      name: " ",
      numberInParty: " ",
    },
    {
      name: " ",
      numberInParty: " ",
    },
    {
      name: " ",
      numberInParty: " ",
    }
]

var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//should listen on port 3000 and console log listening on 3000

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


// Create New Reservation - takes in JSON input
app.post("/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var rewRes = req.body;
    // Using a RegEx Pattern to remove spaces from rewRes
    rewRes.routeName = rewRes.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(rewRes);
  
    reservations.push(rewRes);
  
    res.json(rewRes);
  });