var express = require('express');
var router = express.Router();

router.get('/marks', function(req, res, next) {
    res.render('marks', { title: 'Express' });
  });
router.post('/processFive', function(req,res, next){
    var a = parseInt(req.body.txt1);
    var b = parseInt(req.body.txt2);
    var c = parseInt(req.body.txt3);
    var d = parseInt(req.body.txt4);
    var e = parseInt(req.body.txt5);
    var f = a+b+c+d+e;
    var result = "";
    if(f/5>=80) result = "pass";
    else result = "fail";
    console.log("sum is "+f);
    res.render('result',{mya:a, myb:b, myc:c, myd:d, mye:e, myf:f, myresult:result});
});
  
module.exports = router;
  