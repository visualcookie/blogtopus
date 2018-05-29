exports.up = (knex, Promise) => {
  return knex.schema.createTable('posts', table => {
    table.uuid('id').primary()
    table.string('title').unique().notNullable()
    table.string('description').notNullable()
    table.text('body', 'longtext').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('posts')
}
