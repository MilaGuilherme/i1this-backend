import { getProducts , getProductByID , getProductOnes , getProductProposals , getProductCategories } from "./readProducts"
import { insertProduct , insertProductInCategory } from "./writeProducts"
// TODO removeProductFromCategory

module.exports = { getProducts , getProductByID , getProductOnes , getProductProposals , getProductCategories , insertProduct , insertProductInCategory}