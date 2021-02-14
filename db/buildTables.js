var db = require('./connection');

const createDB = "CREATE DATABASE IF NOT EXISTS i1this COLLATE = utf8_general_ci";
const tables = [
    "CREATE TABLE IF NOT EXISTS users ( id int PRIMARY KEY AUTO_INCREMENT,  name varchar(255),  email varchar(255), type_id int, created_at timestamp)",
    "CREATE TABLE IF NOT EXISTS user_types ( id int PRIMARY KEY AUTO_INCREMENT,  name varchar(255))",
    "CREATE TABLE IF NOT EXISTS categories (  id int PRIMARY KEY AUTO_INCREMENT,  name varchar(255),  sub_of int DEFAULT null)",
    "CREATE TABLE IF NOT EXISTS products (  id int PRIMARY KEY AUTO_INCREMENT,  name varchar(255),  created_by int,  created_at datetime,  price varchar(255),  description varchar(255),  photos varchar(255),  pluses int DEFAULT 0)",
    "CREATE TABLE IF NOT EXISTS proposals (  id int PRIMARY KEY AUTO_INCREMENT,  product_id int,  created_by int,  created_at datetime,  price varchar(255),  link varchar(255),  minimun_quantity int,  requires_intent boolean)",
    "CREATE TABLE IF NOT EXISTS product_in_category (  id int PRIMARY KEY AUTO_INCREMENT,  product_id int,  category_id int)",
    "CREATE TABLE IF NOT EXISTS user_plussed_product (  id int PRIMARY KEY AUTO_INCREMENT,  product_id int,  user_id int,  notification boolean)",
    "CREATE TABLE IF NOT EXISTS user_accepted_proposal (  id int PRIMARY KEY AUTO_INCREMENT,  proposal_id int,  user_id int,  buying_intent boolean)",
    "CREATE TABLE IF NOT EXISTS user_watches_category (  id int PRIMARY KEY AUTO_INCREMENT,  user_id int,  category_id int)",
    "ALTER TABLE users ADD FOREIGN KEY (type_id) REFERENCES user_types (id)",
    "ALTER TABLE products ADD FOREIGN KEY (created_by) REFERENCES users (id)",
    "ALTER TABLE proposals ADD FOREIGN KEY (product_id) REFERENCES products (id)",
    "ALTER TABLE proposals ADD FOREIGN KEY (created_by) REFERENCES users (id)",
    "ALTER TABLE product_in_category ADD FOREIGN KEY (product_id) REFERENCES products (id)",
    "ALTER TABLE product_in_category ADD FOREIGN KEY (category_id) REFERENCES categories (id)",
    "ALTER TABLE user_plussed_product ADD FOREIGN KEY (product_id) REFERENCES products (id)",
    "ALTER TABLE user_plussed_product ADD FOREIGN KEY (user_id) REFERENCES users (id)",
    "ALTER TABLE user_accepted_proposal ADD FOREIGN KEY (proposal_id) REFERENCES proposals (id)",
    "ALTER TABLE user_accepted_proposal ADD FOREIGN KEY (user_id) REFERENCES users (id)",
    "ALTER TABLE user_watches_category ADD FOREIGN KEY (user_id) REFERENCES users (id)",
    "ALTER TABLE user_watches_category ADD FOREIGN KEY (category_id) REFERENCES categories (id)"
]
const log = []

async function query(query) {
    db.query(query, function (err, result) {
        if (err) throw err;
        return result;
    });
}

function createTables() {
    tables.map(m => {
        query(m);
    })
}

function buildTables() {
    query("SHOW DATABASES LIKE 'i1this'").then(data=>console.log(data));
    query(createDB);
    createTables();
    db.end();
}

buildTables();
