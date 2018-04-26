var express = require('express')
var router = express.Router()
var articleModel = require('../modules/articleModel.js')

router.get('/', function(req, res, next) {
  // res.render('admin/index', { title: '管理页面' })
  articleModel.find(function(err, data) {
    if (err) {
      return console.log('get list home', err)
    }

    res.render('pages/admin', {
      list: data
    })
  })
})

// 添加文章
router.get('/add', function(req, res, next) {
  res.render('pages/addArticle', { title: '写文章' })
})

router.post('/add', function(req, res, next) {
  var newArticle = new articleModel({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    tags: req.body.tags || ''
  })

  newArticle.save(function(err, data) {
    if (err) {
      return console.log('post /add', err)
    }

    res.redirect('/')
  })
})

// 删除文章
router.delete('/delete', function(req, res, next) {
  var id = req.query.id
  articleModel.remove({_id: id}, function (err, data) {
    if (err) {
      return console.log(err);
    }
    res.json({code: 200, msg: '删除成功'})
    // res.redirect('/admin')
  })
})

// 修改文章
router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  articleModel.findOne({_id: id}, function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.render('pages/edit-article', {
      detail: data
    })
  })
})

router.post('/update', function(req, res, next) {
  var id = req.body.id;
  console.log(req.body, 'dddddd22222222')
  articleModel.findById(id, function(err, data) {
    if (err) {
      return console.log('update err', err)
    }
    console.log(data, 'update00000000000000000')
    data.title = req.body.title;
    data.content = req.body.content;
    data.author = req.body.author;
    data.tags = req.body.tags || '';
    data.save(function(err) {
      if (err) {
        return console.log('save eeeee', err)
      }
      res.redirect('/admin');
    })
  })
})

module.exports = router