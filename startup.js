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
            "name": "Illesteva Positano Glasses",
            "UserId": 3,
            "price": 1150.00,
            "description": "Handcrafted from a combination of custom acetate, this timeless D-Frame shape is accentuated with a stainless steel nose bridge. The Positano is the perfect pair to turn your holiday mode on. Its unique and modern look especially suits round-shaped faces.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-4.png" }],
        },
        {
            "name": "Smartwatch IWO 13",
            "UserId": 3,
            "price": 429.90,
            "description": "The Smartwatch IWO 13 is the most modern, with it you'll have multiple functions that will help you in your daily life. This Smartwatch is the updated version of the Smarwatch IWO 12, with several improvements, + watch faces and 1.75 hd screen, full touch.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-4.png" }],
        },
        {
            "name": "Macbook Air A2337 Gold 13.3",
            "UserId": 3,
            "price": 6350.00,
            "description": "The Apple MacBook Air A2337 notebook is a solution for working and studying as well as entertaining. As it is portable, the workshop will no longer be your only space to use to open doors to other environments, whether at home or in the office.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-4.png" }],
        },
        {
            "name": "Chiquiteira Sneakers",
            "UserId": 3,
            "price": 49.90,
            "description": "Chiquiteira Casual Sneakers with Elastic Shoelace in Orange Suede fabric - Base Size: 35 - Occasion/Style: Casual - Material: Suede - Inner Material: Helanca - Sole Material: Expanded PVC.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-4.png" }],
        },
        {
            "name": "Vegan Clutch",
            "UserId": 3,
            "price": 13.50,
            "description": "Vegan Clutch / Handbag - Size: 18cm x 10cm - Material: soft synthetic leather with 6 card dividers and zippered outer pocket.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-4.png" }],
        },
        {
            "name": "Original Victor Hugo Backpack",
            "UserId": 3,
            "price": 664.00,
            "description": "Victor Hugo Original Large Navy Blue Backpack - Model: Tote bag - External material: Polyester - Internal material: Polyester - Size: One size - Internal compartments: Pockets - Zipper: Zipper - Number of pockets: 3 - Piece measurements: 32x35x16cm (HxWxD ) and 60cm shoulder strap. - Composition: 100% polyester.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-4.png" }],
        },
        {
            "name": "Boucle D'Oreille earrings",
            "UserId": 3,
            "price": 40.00,
            "description": "Earrings with a modern and very delicate design - Format: bunch of flowers invisible fitting - Color : gold and cream, with rhinestone petals.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/7/img-product-7-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/7/img-product-7-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/7/img-product-7-3.png" }],
        },
        {
            "name": "Montblanc Wallet",
            "UserId": 3,
            "price": 246.00,
            "description": "Material: Calfskin - Leather Full-grain calfskin, chrome-tanned, dyed through, with saffiano print. Color: Black - Lining Jacquard with Montblanc brand name.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/8/img-product-8-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/8/img-product-8-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/8/img-product-8-3.png" }],
        },
        {
            "name": "Lacoste Sport Cap",
            "UserId": 3,
            "price": 117.00,
            "description": "Lacoste cap, original. One size fits all male/female. Includes lacoste original bag.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-4.png" }],
        },
        {
            "name": "iPhone 8 Plus Apple Gold, 64GB",
            "UserId": 3,
            "price": 3599.90,
            "description": "Even tougher and with an innovative design, the iPhone 8 Plus is made entirely of glass and has a frame made of aerospace aluminum, which makes your iPhone resistant to water and dust. You'll be delighted with the new wireless charging system, which allows you to charge your battery in wireless charging stations and charging cradles in hotels, cafes and airports around the world. The HD Retina Display is made with True Tone technology, with ample color tone and the highest accuracy in its class, everything on the screen is more vivid and bright.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/10/img-product-10-1.png" }],
        },
        {
            "name": "Folding Wooden Bench",
            "UserId": 3,
            "price": 77.00,
            "description": "Folding bench made of natural pine wood, great for use at home with in commerce. Size: 50 cm tall, 35x35 cm seat.",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/11/img-product-11-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/11/img-product-11-2.png" }],
        }

    ])
    await Category.create(
        {
            "name": "All",
            "parentId": 1
        })
        .then(category => {
            category.addUsers(2)
        })
    await Category.create(
        {
            "name": "Electronics",
            "parentId": 1
        })
        .then(category => {
            category.addUsers([2, 3, 10])
            category.addProducts(2)
        })
    await Category.create(
        {
            "name": "Fashion",
            "parentId": 1
        })
        .then(category => {
            category.addProducts([1, 4, 5, 6, 7, 8, 9])
        })
    await Category.create(
        {
            "name": "Furniture",
            "parentId": 1
        })
        .then(category => {
            category.addProducts(11)
        })
    await Category.create(
        {
            "name": "Pets",
            "parentId": 1
        })
    await Proposal.bulkCreate([
        {
            "link": "https://www.enjoei.com.br/p/oculos-illesteva-boca-58077601?rsid=e4bff0e9-ba3d-47de-b057-36eea628257a-1628804403732&rsp=1&rspix=17",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/1/img-product-1-4.png" }],
            "price": 1150.00,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 1,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/relogio-iwo-13-59286515?rsid=5f6a10b6-c32a-470c-8e4c-1dc3e974767c-1628804405055&rsp=1&rspix=6",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/2/img-product-2-4.png" }],
            "price": 429.90,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 2,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/macbook-air-2019-8gb-128gb-ssd-58673299?rsid=1599cbb7-907f-4cf4-8c72-2def1365aa01-1628805617093&rsp=1&rspix=2",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/3/img-product-3-4.png" }],
            "price": 6350.00,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 3,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/tenis-chiquiteira-casual-cadarco-elastico-suede-laranja-via-55721181?rsid=ac285969-f85e-4608-82e2-5d2ab8f49925-1628804416124&rsp=1&rspix=13",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/4/img-product-4-4.png" }],
            "price": 49.90,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 4,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/clutch-vegana-58441771?rsid=8f735190-417d-4a4c-87de-bb6a4655738d-1628804418422&rsp=3&rspix=23",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/5/img-product-5-4.png" }],
            "price": 13.50,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 5,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/mochila-victor-hugo-original-58898390?rsid=93afc499-900d-4521-9402-62e8f1e01b23-1628804420090&rsp=2&rspix=5",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/6/img-product-6-4.png" }],
            "price": 664.00,
            "minimunQty": 0,
            "requiresIntent": false,
            "dueDate": new Date(),
            "ProductId": 6,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/par-de-brincos-boucle-d-oirelle-59271962?rsid=104ecee4-63f7-4a58-bb3b-3bd8ad7de354-1628804426111&rsp=5&rspix=20",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/7/img-product-7-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/7/img-product-7-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/7/img-product-7-3.png" }],
            "price": 40.00,
            "minimunQty": 6,
            "requiresIntent": true,
            "dueDate": new Date(),
            "ProductId": 7,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/carteira-montblanc-58955074?rsid=a33397cb-e238-41c2-86f5-78efe018fb1d-1628804427266&rsp=1&rspix=21",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/8/img-product-8-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/8/img-product-8-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/8/img-product-8-3.png" }],
            "price": 246.00,
            "minimunQty": 10,
            "requiresIntent": true,
            "dueDate": new Date(),
            "ProductId": 8,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/bone-lacoste-57415683?rsid=e5cf3847-e568-42f9-b8ed-473a0ff3370d-1628804428116&rsp=1&rspix=22",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-2.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-3.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/9/img-product-9-4.png" }],
            "price": 117.00,
            "minimunQty": 5,
            "requiresIntent": true,
            "dueDate": new Date(),
            "ProductId": 9,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/iphone-8-plus-dourado-59112997?rsid=dae0178f-d682-4fb6-8513-0bb91e8f6ea4-1628804441122&rsp=1&rspix=21",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/10/img-product-10-1.png" }],
            "price": 3599.90,
            "minimunQty": 1,
            "requiresIntent": true,
            "dueDate": new Date(),
            "ProductId": 10,
            "UserId": 2,
        },
        {
            "link": "https://www.enjoei.com.br/p/banco-pratico-dobravel-57180893?rsid=1fe7791c-980e-4fc7-9f5b-6f77cc55e95f-1628804446935&rsp=4&rspix=6",
            "photos": [{ "alt": "", "src": "https://www.i1this.com/img/products/11/img-product-11-1.png" }, { "alt": "", "src": "https://www.i1this.com/img/products/11/img-product-11-2.png" }],
            "price": 77.00,
            "minimunQty": 2,
            "requiresIntent": true,
            "dueDate": new Date(),
            "ProductId": 11,
            "UserId": 2,
        }

    ])
    await User.findOne({ where: { id: 3 } }).then(user => {
        user.addAccepted(1)
        user.addOned(2)
    })
    await Report.bulkCreate([
        {
            "reason": "Lorem ipsum dolor sit amet",
            "productId": 1,
            "userId": 1
        },
        {
            "reason": "Lorem ipsum dolor sit amet",
            "productId": 1,
            "userId": 2
        },
        {
            "reason": "Lorem ipsum dolor sit amet",
            "productId": 2,
            "userId": 3
        }
    ])
}

start()