const db = require('../data/db_config.js');

function getAll() {
    return db('recipes')
}

function getRecipeById(recipe_id) {
    return db('recipes')
        .leftJoin('steps', 'recipe.recipe_id', 'steps.recipe_id')
        .leftJoin('ingredients', 'ingredients.step_id')
        .where({ 'recipe.recipe_id': recipe_id })
        .orderBy('steps.step_number')
        .select('recipe.recipe_id', 'recipe.recipe_name', 'recipe.created_at',
            'steps.steps_id', 'steps.steps_number', 'steps.step_instructions', 'ingredients.ingredient_id', 'ingredients.ingredient_name', 'ingredients.ingredient_id')
}

module.exports = { getRecipeById, getAll };