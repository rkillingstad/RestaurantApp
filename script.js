
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

//routes that send the user to the different pages 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });