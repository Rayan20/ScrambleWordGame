var express = require('express');
var path = require('path');
var logger = require('morgan');
var home = require('./routes/index');
var loginRouter = require('./routes/login');
var api = require('./routes/api');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
global.ScrambeWordGameCookie = 'scramble_word_game_cookie';
var app = express();
app.use(cookieParser(ScrambeWordGameCookie));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use(express.session({
//     secret: 'another-secret'
// }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/public', express.static(path.join(__dirname, 'public')));
// routes
app.use('/', home);
app.use('/home', home);
app.use('/login', loginRouter);
app.use('/api', api);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
});

module.exports = app;
