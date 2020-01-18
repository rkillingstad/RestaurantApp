
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

var patrons = [{
    
}]
//should listen on port 3000 and console log listening on 3000

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
