const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// to parse the information coming along with the form
const bodyParser = require('body-parser');
const ps4Router = require('./routes/ps4');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// create a request body object where the information from the form submission is stored.
app.use(bodyParser.urlencoded({extended: true}));
app.post('/submit', (req, res, next) => {
    console.log('Country: ' + req.body.country);
    const delay = (timeout, callback) => {
        setTimeout(
            () => {
                let country = req.body.country;
                console.log(`Rendering ${country} to the backend`);
                callback(country);
            },
            timeout
        );
    };
    delay(
        4000,
        country => {
            console.log(`Now you should see country in the backend`);
            setTimeout(() => res.redirect('/ps4'), 4000);
        }
    );
})
app.use('/ps4', ps4Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
