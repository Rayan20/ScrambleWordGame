var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController');

router.get('/', function (req, res, next) {
    res.render('login', {loginMessage: ' '});
});
router.get('/guest', function (req, res, next) {
    var oneHour = 3600 * 1000; //1 HOUR
    res.cookie(ScrambeWordGameCookie, "guest", {maxAge: oneHour, httpOnly: false});
    res.redirect('/home')
});
router.get('/findAccount/:username', function (req, res, next) {
    var username = req.params.username;
    loginController.queryAccountByUsername(username, function (error, result) {
        if (error) {
            res.render('error');
        } else {
            res.status(200);
            if (!result) {
                res.send('no account found for ' + username);
            } else {
                res.redirect('/home');
            }
        }
    });
});
router.post('/registerAccount', function (req, res, next) {
    var accountForm = req.body;
    var username = accountForm.username;
    loginController.queryAccountByUsername(username, function (error, queryResult) {
        if (error) {
            res.render('signup', {signupMessage: 'Encountered an internal error'});
        } else {
            res.status(200);
            if (!queryResult || queryResult.rows.length < 1) {
                loginController.registerAccount(accountForm, function (error1, result) {
                    if (error1) {
                        console.log(error1);
                        res.render('login', {loginMessage: 'Encountered an error during registration'});
                    } else {
                        if (!result || result.rows.length < 1) {
                            res.render('login', {loginMessage: 'Registration failed : ' + error});
                        } else {
                            res.render('login', {loginMessage: 'Registration is successful. Please login.'});
                        }
                    }

                })
            } else {
                res.render('signup', {signupMessage: 'Username already exists'});
            }
        }
    })
});

router.get('/signupForm', function (req, res, next) {
    var accountForm = req.body;
    res.render('signup', {signupMessage: ''});
});
router.post('/userLogin', function (req, res, next) {
    var loginForm = req.body;
    loginController.login(loginForm.username, loginForm.password, function (error, result) {
        if (error) {
            res.render('login', {loginMessage: 'Encountered an error during login:' + error});
        } else {
            if (!result) {
                res.render('login', {loginMessage: 'Incorrect username or password. Please try again or register.'});

            } else {
                if (req.body.loginkeeping) {
                    var oneWeek = 7 * 24 * 3600 * 1000; //1 weeks
                    res.cookie(ScrambeWordGameCookie, loginForm.username, {maxAge: oneWeek, httpOnly: false});
                } else {
                    var oneHour = 3600 * 1000; //1 HOUR
                    res.cookie(ScrambeWordGameCookie, loginForm.username, {maxAge: oneHour, httpOnly: false});
                }

                res.redirect('/home');
            }
        }
    });
});

module.exports = router;
