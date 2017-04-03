
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters', (table) => {
      table.increments('monster_id').primary();
      table.string('monsters_name').notNullable();
    })

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('monsters')
};
