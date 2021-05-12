exports.up = function(knex) {
    const db = knex;
    const userQuery = "CREATE SCHEMA IF NOT EXISTS `i1this` DEFAULT character SET utf8;USE i1this; DROP TABLE IF EXISTS users, user_types, categories, products, proposals, product_in_category, user_oned_product, user_accepted_proposal,user_watches_category, category_parents_category, user_plussed_product, logs;"
    return db.raw(userQuery)
        .then((data) => { console.log(data[0][0])})
};

exports.down = function(knex) {
  
};