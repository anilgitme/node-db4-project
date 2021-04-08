export async function seed(knex) {
    await knex("recipes").insert([
        { recipe_name: "pizza", created_at: '2021-01-01 08:23:19.120' },
        { recipe_name: "cake", created_at: '2021-01-02 08:23:19.120' },
        { recipe_name: "fried rice", created_at: '2021-01-03 08:23:19.120' },
        { recipe_name: "ham burger", created_at: '2021-01-04 08:23:19.120' }
    ])
}