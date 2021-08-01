exports.seed = function (knex) {
  return knex('products').del()
    .then(function () {
      return knex('products')
        .insert([
          {
            id: 1,
            name: "Test product",
            created_by: 3,
            created_at: new Date(),
            updated_at: new Date(),
            price: 5.45,
            description: ` Integer pharetra arcu sit amet sapien rhoncus, sit amet dapibus eros accumsan. Praesent ut ligula porttitor, commodo metus a, varius libero. Quisque ac ante mauris. Phasellus justo sapien, fringilla porttitor nisl ut, viverra fermentum lectus. Quisque viverra convallis gravida. Duis ultricies volutpat ligula tincidunt placerat. Aenean vulputate massa sit amet ex semper commodo. Proin nibh lorem, pellentesque non urna et, dictum vulputate tellus. Ut volutpat convallis auctor.`,
            photos: `[{"alt":"","src":"https://via.placeholder.com/150"},{"alt":"","src":"https://via.placeholder.com/250"}]`,
            ones: 0,
            active: true
          },
          {
            id: 2,
            name: "Test product",
            created_by: 3,
            created_at: new Date(),
            updated_at: new Date(),
            price: 99.99,
            description: ` Integer pharetra arcu sit amet sapien rhoncus, sit amet dapibus eros accumsan. Praesent ut ligula porttitor, commodo metus a, varius libero. Quisque ac ante mauris. Phasellus justo sapien, fringilla porttitor nisl ut, viverra fermentum lectus. Quisque viverra convallis gravida. Duis ultricies volutpat ligula tincidunt placerat. Aenean vulputate massa sit amet ex semper commodo. Proin nibh lorem, pellentesque non urna et, dictum vulputate tellus. Ut volutpat convallis auctor.`,
            photos: `[{"alt":"","src":"https://via.placeholder.com/150"},{"alt":"","src":"https://via.placeholder.com/250"}]`,
            ones: 0,
            active: true
          },
        ])
    })
};