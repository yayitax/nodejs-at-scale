'use strict'

// function up () {
//   return new Promise(function (resolve) {
//     resolve()
//   })
// }

const db = require('./database')

const tableName = 'users'

function up () {
  return db.schema.createTableIfNotExists(tableName, (table) => {
    table.increments()
    table.string('name')
    table.timestamps()
  })
}


module.exports = {
  up
}