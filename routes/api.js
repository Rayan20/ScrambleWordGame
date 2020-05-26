var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/random', function(req, res, next) {
    res.render('random', {page:'', menuId:'random'});
});
router.get('/bonus', function(req, res, next) {
    res.render('bonus', {page:'', menuId:'bonus'});
});
router.get('/signup', function(req, res, next) {
    res.render('signup', {page:'', menuId:'signup'});
});


module.exports = router;
