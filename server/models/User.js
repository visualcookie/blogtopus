const Model = require('./BaseModel')
const Password = require('objection-password')()
const Unique = require('objection-unique')({
  fields: ['username', 'email'],
  identifiers: ['id']
})

class Users extends Unique(Password(Model)) {
  static get tableName () {
    return 'users'
  }
}

module.exports = Users
