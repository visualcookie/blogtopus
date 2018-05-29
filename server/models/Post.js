const Model = require('./BaseModel')
const Guid = require('objection-guid')()
const Unique = require('objection-unique')({
  fields: ['title'],
  identifiers: ['id']
})

class Posts extends Guid(Unique(Model)) {
  static get tableName () {
    return 'posts'
  }
}

module.exports = Posts
