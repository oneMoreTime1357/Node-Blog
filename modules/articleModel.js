var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
  title: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  },
  content: String,
  author: String,
  tags: [{type: String}],
  isPut: Boolean
})

var model = mongoose.model('article', articleSchema)

module.exports = model