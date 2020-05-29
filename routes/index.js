var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('home');
    var mycookie = req.cookies[ScrambeWordGameCookie];
    if(!mycookie){
        res.render('login', {errorMessage:'You have not signed in yet. Please sign in to play the game.'});
    }
    else{
        res.render('index', {page:'', menuId:'random'});
    }
});


module.exports = router;
