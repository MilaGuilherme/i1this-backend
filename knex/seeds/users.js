exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id:1,
          name: "Administrator",
          password: "$2b$10$J9sEAzFhbe2gp6vBxJQ1DO7vHDVoYqUGI6Zk98SF.15EYQDmWTnbG",
          email: "admin@i1this.com",
          type_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
          active: true,
        },
        {
          id:2,
          name: "Seller",
          password: "$2b$10$J9sEAzFhbe2gp6vBxJQ1DO7vHDVoYqUGI6Zk98SF.15EYQDmWTnbG",
          email: "seller@i1this.com",
          type_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
          active: true,
        },
        {
          id:3,
          name: "Buyer",
          password: "$2b$10$J9sEAzFhbe2gp6vBxJQ1DO7vHDVoYqUGI6Zk98SF.15EYQDmWTnbG",
          email: "buyer@i1this.com",
          type_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
          active: true,
        },
      ]);
    });
};
