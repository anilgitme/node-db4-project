exports.seed = async function(knex) {
    await knex("steps").insert([
        { step_number: 1, step_instructions: 'heat the oven', recipe_id: 1 },
        { step_number: 2, step_instructions: 'mix it up', recipe_id: 2 },
        { step_number: 3, step_instructions: 'boil rice', recipe_id: 3 },
        { step_number: 4, step_instructions: 'heat the buns', recipe_id: 4 }
    ])
};