import { getUsers , getUserByID , getUserProduct , getUserOned, getUserWatched, getUserAccepted } from "./readUsers";
import { insertUser, insertOne, insertWatch, insertAccept , updateUser } from "./writeUsers";


module.exports = {getUsers , getUserByID , getUserProduct , getUserOned, getUserWatched, getUserAccepted,insertUser, insertOne, insertWatch, insertAccept , updateUser}