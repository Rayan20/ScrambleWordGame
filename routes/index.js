var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('home');
    var mycookie = req.cookies[ScrambeWordGameCookie];
    if (!mycookie) {
        res.render('login', {loginMessage: ''});
    } else {
        res.render('index', {page: '', menuId: 'random', Username: mycookie});
    }
});


module.exports = router;
