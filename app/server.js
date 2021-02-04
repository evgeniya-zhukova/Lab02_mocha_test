// app/server.js

var express = require("express");
var app = express();
var converter = require("./converter");

//http://localhost:3000/add?i=5&j=2
app.get("/add", (req, res) => {

  var i = parseInt(req.query.i, 10);
  var j = parseInt(req.query.j, 10);
  var sum = calculator.add(i, j);
  res.send(sum);

});

//http://localhost:3000/sub?i=5&j=2
app.get("/sub", (req, res) => {

  var i = parseInt(req.query.i, 10);
  var j = parseInt(req.query.j, 10);
  var subs = calculator.sub(i, j);
  res.send(JSON.stringify(subs));

});

app.listen(3000);