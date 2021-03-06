var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController');

/* GET home page. */
router.get('/random', function (req, res, next) {
    var mycookie = req.cookies[ScrambeWordGameCookie];
    if (!mycookie) {
        res.render('login', {loginMessage: ''});
    } else {
        res.render('random', {page: '', menuId: 'random', Username: mycookie});
    }
});
router.get('/bonus', function (req, res, next) {
    var mycookie = req.cookies[ScrambeWordGameCookie];
    if (!mycookie) {
        res.render('login', {loginMessage: ''});
    } else {
        res.render('bonus', {page: '', menuId: 'random', Username: mycookie});
    }
});
router.get('/instructions', function (req, res, next) {
    var mycookie = req.cookies[ScrambeWordGameCookie];
    if (!mycookie) {
        res.render('login', {loginMessage: ''});
    } else {
        res.render('instructions', {page: '', menuId: 'random', Username: mycookie});
    }
});
router.get('/clear_cookie', function (req, res, next) {
    res.clearCookie(ScrambeWordGameCookie);
    res.redirect('/login');
});


module.exports = router;
