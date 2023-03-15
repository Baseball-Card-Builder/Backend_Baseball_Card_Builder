/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("batters", (table) => {
        table.increments("id").primary();
        table.foreign("batter_id").references("users.id");
        table.string("first_name", 32).notNullable();
        table.string("last_name", 32).notNullable();
        table.string("AVG", 32).notNullable();
        table.decimal("HR", null).notNullable();
        table.integer("RBI").notNullable();
        table.decimal("OPS", null).notNullable();
        table.string("image", 255);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.scheme.dropTable("batters")
};
