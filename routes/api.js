var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController');

/* GET home page. */
router.get('/random', function(req, res, next) {
    res.render('random', {page:'', menuId:'random'});
});
router.get('/bonus', function(req, res, next) {
    res.render('bonus', {page:'', menuId:'bonus'});
});
router.get('/clear_cookie', function(req, res, next) {
    res.clearCookie(ScrambeWordGameCookie);
    res.send('cookie is cleared. You will have to sign in again to get a new cookie.');
});


module.exports = router;
