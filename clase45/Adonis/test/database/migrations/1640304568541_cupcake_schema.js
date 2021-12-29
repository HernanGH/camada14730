'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupcakeSchema extends Schema {
  up () {
    this.create('cupcakes', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cupcakes')
  }
}

module.exports = CupcakeSchema
