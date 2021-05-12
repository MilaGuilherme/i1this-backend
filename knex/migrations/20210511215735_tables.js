
exports.up = function (knex) {
    const db = knex;
    const userQuery = `
    CREATE TABLE users
    (
     id         INT NOT NULL auto_increment PRIMARY KEY,
     name       VARCHAR(255) NOT NULL,
     email      VARCHAR(255) UNIQUE NOT NULL,
     type_id    INT,
     created_at DATETIME NOT NULL,
     active     BOOLEAN DEFAULT true,
     FOREIGN KEY (type_id) REFERENCES user_types(id)
    );

    CREATE TABLE user_types
    (
        id   INT NOT NULL auto_increment PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );

    CREATE TABLE categories
    (
        id   INT NOT NULL auto_increment PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );

    CREATE TABLE products
    (
        id          INT NOT NULL auto_increment PRIMARY KEY,
        name        VARCHAR(255) NOT NULL,
        created_by  INT NOT NULL,
        created_at  DATETIME NOT NULL,
        price       DECIMAL NOT NULL,
        description VARCHAR(255) NOT NULL,
        photos      VARCHAR(255) NOT NULL,
        ones        INT DEFAULT 0,
        active      BOOLEAN DEFAULT 1,
        FOREIGN KEY (created_by) REFERENCES users(id)
    );

    CREATE TABLE proposals
    (
        id               INT NOT NULL auto_increment PRIMARY KEY,
        product_id       INT NOT NULL,
        created_by       INT NOT NULL,
        created_at       DATETIME NOT NULL,
        price            DECIMAL NOT NULL,
        link             VARCHAR(255),
        minimun_quantity INT,
        requires_intent  BOOLEAN,
        FOREIGN KEY (created_by) REFERENCES users(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
    );

    CREATE TABLE product_in_category
    (
        id          INT NOT NULL auto_increment PRIMARY KEY,
        product_id  INT NOT NULL,
        category_id INT NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (category_id) REFERENCES categories(id)
    );

    CREATE TABLE user_oned_product
    (
        id           INT NOT NULL auto_increment PRIMARY KEY,
        product_id   INT NOT NULL,
        user_id      INT NOT NULL,
        notification BOOLEAN DEFAULT false,
        oned_at      DATETIME NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE user_accepted_proposal
    (
        id            INT NOT NULL auto_increment PRIMARY KEY,
        proposal_id   INT NOT NULL,
        user_id       INT NOT NULL,
        buying_intent BOOLEAN DEFAULT false,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (proposal_id) REFERENCES proposals(id)
    );

    CREATE TABLE user_watches_category
    (
        id          INT NOT NULL auto_increment PRIMARY KEY,
        user_id     INT NOT NULL,
        category_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (category_id) REFERENCES categories(id)
    );

    CREATE TABLE category_parents_category
    (
        id        INT NOT NULL auto_increment PRIMARY KEY,
        parent_id INT NOT NULL,
        child_id  INT NOT NULL,
        FOREIGN KEY (parent_id) REFERENCES categories(id),
        FOREIGN KEY (child_id) REFERENCES categories(id)
    );

    CREATE TABLE logs
    (
        id              INT NOT NULL auto_increment PRIMARY KEY,
        modified_table  VARCHAR(255) NOT NULL,
        modified_column VARCHAR(255) NOT NULL,
        modified_by     INT NOT NULL,
        modified_at     DATETIME NOT NULL,
        old_value       VARCHAR(255),
        new_value       VARCHAR(255),
        FOREIGN KEY (modified_by) REFERENCES users(id)
    );  `
    return db.raw(userQuery)
        .then((data) => { console.log(data[0][0]) })
};

exports.down = function (knex) {

};
