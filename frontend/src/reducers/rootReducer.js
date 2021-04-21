import {combineReducers} from "redux";
import profile from "./profile";
import users from "./users";
import poll from './poll';
import user from './user';
import voivodeships from './voivodeships'

const rootReducer = combineReducers({
    profile,
    users,
    poll,
    user,
    voivodeships
})

export default rootReducer;