exports.up = async function(knex) {
    return (await knex.schema.createTable('recipes', table => {
            table.increments('recipe_id')
            table.string('recipe_name')
            table.datetime('create_at')
        })
        .createTable('steps', table => {
            table.increments('step_id')
            table.integer('step_number')
            table.string('step_instructions')
            table.integer('recipe_id')
            table.foreign('recipe_id').references('recipes.recipe_id')
        })
        .createTable('ingredients', (table) => {
            table.integer(ingredient_id).notNull().unsigned()
                .references('recipe_id').inTable('recipes')
                .onDelete('CASCADE').onUpdate('CASCADE')
            table.primary(['recipe_id', 'ingredients_id'])
        })
    )
}

exports.down = async function(knex) {
    return (await knex.shema.dropTableIfExists('recipes')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
    )
}