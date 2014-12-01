//REQUIRE
var express = require('express');
var path = require('path');
var vhost = require('vhost');
var favicon = require('serve-favicon');
var logger = require('morgan');
var connect = require('connect');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');


//ROUTES FOLDER
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();



// VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); //hogan



//MIDDLEWARE
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//ROUTER
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
