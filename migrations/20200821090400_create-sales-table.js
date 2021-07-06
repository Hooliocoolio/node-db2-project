
exports.up = function(knex) {
    return knex.schema.createTable('car-sales', tbl => {
        tbl.increments();
        tbl.text('carmake', 128)
           .notNullable();
        tbl.text('carmodel', 128)
           .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car-sales');
};
