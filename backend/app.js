var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Sentry = require('@sentry/node'); // Ajout du module Sentry

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Initialisation de Sentry
Sentry.init({
  dsn: 'votre_dsn_sentry', // Remplacez ceci par votre DSN Sentry
});

// Middleware Sentry (doit être ajouté avant vos routes)
app.use(Sentry.Handlers.requestHandler());

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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Sentry error handler (doit être ajouté après vos routes)
app.use(Sentry.Handlers.errorHandler());

const morgan = require('morgan');
app.use(morgan('dev'));

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Sécurité des en-têtes HTTP
app.use(helmet());

// Limiter les requêtes répétées
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes par fenêtre
});
app.use(limiter);

const cors = require('cors');
app.use(cors());

module.exports = app;
