/**
 * Key pieces here are the express app, the router and the database
 */
const express = require('express');
const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 3000);

// here we pass together all the routes supported by our API
app.use('/', router);

// catch 404 and forward to err handler
app.use(function (req, res, next){
    var err = new Error('Not  Found');
    err.status = 404;
    next(err);
});

// on error, display it and stacktrace
app.use(function (err, req, res, next){
    res.status(err.status || 500);
    res.send('error', {
        message: err.message,
        error: err  
    });
});

app.listen(app.get('port'), function() {
    console.log('Application running on http://localhost:' + app.get('port') + '/api/');
});
