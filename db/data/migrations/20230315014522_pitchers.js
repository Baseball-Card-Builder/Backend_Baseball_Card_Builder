/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("pitchers", function (table) {
        table.increments("id").primary();
        table.integer('user_id').notNullable();
        table.foreign("user_id").references("users.id");
        table.string("first_name", 32).notNullable();
        table.string("last_name", 32).notNullable();
        table.string("W-L", 32).notNullable();
        table.decimal("ERA", null).notNullable();
        table.integer("K").notNullable();
        table.decimal("WHIP", null).notNullable();
        table.string("image", 255);  
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.scheme.dropTable("pitchers");
};
