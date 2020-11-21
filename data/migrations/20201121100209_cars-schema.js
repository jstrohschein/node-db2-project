
exports.up = function(knex) {
  return knex.schema.createTable('cars', t => {
    t.varchar('vin', 30).unique().notNullable()
    t.string('make', 25).notNullable()
    t.string('model', 25).notNullable()
    t.integer('mileage', 125).notNullable()
    t.string('tranType', 25)
    t.string('titleStatus', 25)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
