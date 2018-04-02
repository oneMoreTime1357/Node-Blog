var Promise = require('bluebird')
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var favicon = require('serve-favicon')

var mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/blogNode', {useMongoClient: true})

var app = express()

var index = require('./routes/index')
var admin = require('./routes/admin')

// view engine setup{}
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))

app.use('/', index)
app.use('/admin', admin)

module.exports = app