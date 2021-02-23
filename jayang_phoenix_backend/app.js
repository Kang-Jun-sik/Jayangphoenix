//Db connection 참고 - https://loy124.tistory.com/244?category=791817
// https://github.com/velopert/mongoose_tutorial

var createError = require('http-errors');
var mongoose    = require('mongoose');
var express = require('express');
var path = require('path');
var bodyParser  = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var User = require('./user');
var router = require('./router')(app,User)

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

const dbAddress = "mongodb+srv://kcu1436:ruddnjs11@@jayangphoenix.lx9yw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
    .connect(dbAddress, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

module.exports = app;
