const { sequelize, UserType, User, Category, Product, Proposal, Report } = require('./models')

async function start() {
    await sequelize.sync({ alter: true, force: true })
    await UserType.bulkCreate([
        { "name": "Admin" },
        { "name": "Seller" },
        { "name": "Buyer" }
    ])
    await User.bulkCreate([
        {
            "name": "Admin",
            "password": "$2b$10$HNndd.LcZrb1ZTdIKbC0PeeOK0lZSdLOWMAwulFxF9a3Wos7BErQq", //password
            "email": "admin@i1this.com",
            "UserTypeId": 1
        },
        {
            "name": "Seller",
            "password": "$2b$10$HNndd.LcZrb1ZTdIKbC0PeeOK0lZSdLOWMAwulFxF9a3Wos7BErQq",
            "email": "seller@i1this.com",
            "UserTypeId": 2
        },
        {
            "name": "Buyer",
            "password": "$2b$10$HNndd.LcZrb1ZTdIKbC0PeeOK0lZSdLOWMAwulFxF9a3Wos7BErQq",
            "email": "buyer@i1this.com",
            "UserTypeId": 3
        }
    ])
    await Product.bulkCreate([
        {
            "name": "Test product 1",
            "UserId": 3,
            "price": 5.45,
            "description": ` Integer pharetra arcu sit amet sapien rhoncus, sit amet dapibus eros accumsan. Praesent ut ligula porttitor, commodo metus a, varius libero. Quisque ac ante mauris. Phasellus justo sapien, fringilla porttitor nisl ut, viverra fermentum lectus. Quisque viverra convallis gravida. Duis ultricies volutpat ligula tincidunt placerat. Aenean vulputate massa sit amet ex semper commodo. Proin nibh lorem, pellentesque non urna et, dictum vulputate tellus. Ut volutpat convallis auctor.`,
            "photos": [{"alt":"","src":"https://via.placeholder.com/150"},{"alt":"","src":"https://via.placeholder.com/250"}],
        },
        {
            "name": "Test product 2",
            "UserId": 3,
            "price": 10.45,
            "description": ` Integer pharetra arcu sit amet sapien rhoncus, sit amet dapibus eros accumsan. Praesent ut ligula porttitor, commodo metus a, varius libero. Quisque ac ante mauris. Phasellus justo sapien, fringilla porttitor nisl ut, viverra fermentum lectus. Quisque viverra convallis gravida. Duis ultricies volutpat ligula tincidunt placerat. Aenean vulputate massa sit amet ex semper commodo. Proin nibh lorem, pellentesque non urna et, dictum vulputate tellus. Ut volutpat convallis auctor.`,
            "photos": [{"alt":"","src":"https://via.placeholder.com/150"},{"alt":"","src":"https://via.placeholder.com/250"}],
        }
    ])
    await Category.create(
        {
            "name": "Default Parent Category"
        })
        .then(category=>{
        category.addUsers(1)
        category.addProducts(1)
        })
    await Category.create(
        {
            "name": "Default Child Category",
            "parentId":1
        })
        .then(category=>{
        category.addUsers([2,3])
        category.addProducts(2)
        })
    await Proposal.bulkCreate([
        {
            "photos": [{"alt":"","src":"https://via.placeholder.com/150"},{"alt":"","src":"https://via.placeholder.com/250"}],
            "links": "https://i1this.com/",
            "price": 10.45,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 1,
            "UserId": 2,
        },
        {
            "photos": [{"alt":"","src":"https://via.placeholder.com/150"},{"alt":"","src":"https://via.placeholder.com/250"}],
            "links": "https://i1this.com/",
            "price": 10.45,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 1,
            "UserId": 2
        }
    ])
    await User.findOne({where:{id:3}}).then(user=>{
        user.addAccepted(1)
        user.addOned(2)
    })
    await Report.bulkCreate([
        {
            "reason":"Lorem ipsum dolor sit amet",
            "productId":1,
            "userId":1
        },
        {
            "reason":"Lorem ipsum dolor sit amet",
            "productId":1,
            "userId":2
        },
        {
            "reason":"Lorem ipsum dolor sit amet",
            "productId":2,
            "userId":3
        }
    ])
}

start()