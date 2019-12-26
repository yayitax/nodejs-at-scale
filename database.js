'use strict'

const createKnex = require('knex')

const knex = createKnex({
  client: 'pg',
  connection: 'postgres://@localhost:5432/nodejs_at_scale'
})

module.exports = knex