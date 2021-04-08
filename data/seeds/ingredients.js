exports.seed = async function(knex) {
    await knex("ingredients").insert([
        { ingredients_name: "flour", quantity: 0.014, step_id: 0 },
        { ingredients_name: "butter", quantity: 1, step_id: 1 },
        { ingredients_name: "rice", quantity: 2, step_id: 2 },
        { ingredients_name: "ham", quantity: 3, step_id: 3 }
    ])
};