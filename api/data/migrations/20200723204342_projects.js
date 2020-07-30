
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.int('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
    tbl.string('description').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
