import { getCategories , getCategoryById , getCategoryProducts , getCategoryWatchers , getCategoryParents, getCategoryChildren } from "./readCategories"
import { insertCategory , insertChild , insertParent } from "./writeCategories"
// TODO updateCategory

module.exports = { getCategories , getCategoryById , getCategoryProducts , getCategoryWatchers , getCategoryParents, getCategoryChildren , insertCategory , insertChild , insertParent }