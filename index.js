var express = require('express');
var router = express.Router();

router.get('/index', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function (req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/process', function (req, res, next) {
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = a + b;
  console.log("Sum of two numbers is " + c);
  res.render('ans', { mya: a, myb: b, myc: c });
});


module.exports = router;
