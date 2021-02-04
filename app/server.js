// app/server.js

var express = require("express");
var app = express();
var calculator = require("./calculator");

//http://localhost:3000/add?i=5&j=2
app.get("/add", (req, res) => {

  var i = req.query.i;
  var j = req.query.j;
  var sum1 = calculator.add(i, j);
  res.send(sum1);

});

//http://localhost:3000/sub?i=5&j=2
app.get("/sub", (req, res) => {

  var i = req.query.i;
  var j = req.query.j;
  var sub1 = calculator.sub(i, j);
  res.send(sub1);

});

//http://localhost:3000/mul?i=5&j=2
app.get("/mul", (req, res) => {

  var i = req.query.i;
  var j = req.query.j;
  var mul1 = calculator.mul(i, j);
  res.send(mul1);

});

//http://localhost:3000/div?i=10&j=2
app.get("/div", (req, res) => {

  var i = req.query.i;
  var j = req.query.j;
  var div1 = calculator.div(i, j);
  res.send(div1);

});

app.listen(3000);