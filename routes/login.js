var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController');

router.get('/', function(req, res, next) {
    res.render('login', {loginMessage:''});
});
router.get('/findAccount/:username', function(req, res, next) {
    var username = req.params.username;
    loginController.queryAccountByUsername(username, function (error, result) {
        if (error){
            res.render('error');
        }
        else{
            res.status(200);
            if (!result){
                res.send('no account found for '+ username);
            }
            else {
                res.redirect('/home');
                //res.render('index');
            }
        }
    });
    //res.render('bonus', {page:'', menuId:'bonus'});
});
router.post('/registerAccount', function(req, res, next) {
    var accountForm = req.body;
    loginController.registerAccount(accountForm, function (error, result) {
        if (error){
            res.render('login', {loginMessage:'Encountered an error during registration: '+ error});
        }
        else{
            if (!result || result.rows.length<1){
                res.render('login', {loginMessage:'Registration failed : '+ error});

            }
            else {
                res.render('login', {loginMessage:'Registration is sucessful. Please login.'});
            }
        }
    });
    //res.render('bonus', {page:'', menuId:'bonus'});
});
router.post('/userLogin', function(req, res, next) {
    var loginForm = req.body;
    loginController.login(loginForm.username, loginForm.password, function (error, result) {
        if (error){
            res.render('login', {loginMessage:'Encountered an error during login:'+ error});
        }
        else{
            if (!result){
                res.render('login', {loginMessage:'Incorrect username or password. Please try again or register.'});

            }
            else {
                if ( req.body.loginkeeping )
                {
                    var oneWeek = 7 * 24 * 3600 * 1000; //1 weeks
                    res.cookie(ScrambeWordGameCookie, loginForm.username,{maxAge: oneWeek, httpOnly: true });
                }
                else{
                    var oneHour = 3600 * 1000; //1 HOUR
                    res.cookie(ScrambeWordGameCookie, loginForm.username,{maxAge: oneHour, httpOnly: true });
                }

                res.redirect('/home');
            }
        }
    });
});

module.exports = router;
