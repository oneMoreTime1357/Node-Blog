var express = require('express')
var router = express.Router()
var articleModel = require('../modules/articleModel.js')

router.get('/', function(req, res, next) {
  // 
  articleModel.find(function(err, data) {
    if (err) {
      return console.log('get list home', err)
    }

    res.render('pages/index', {
      list: data
    })
  })
})

// 文章详情
router.get('/article/:id', function(req, res, next) {
  var id = req.params.id
  articleModel.findOne({_id: id}, function (err, data) {
    if (err) {
      return console.log(err)
    }
    console.log(data, '文章详情')
    res.render('pages/article-detail', { detail: data })
  })
})

module.exports = router
