import {combineReducers} from "redux";
import profile from "./profile";
import users from "./users";
import poll from './poll';
import user from './user';

const rootReducer = combineReducers({
    profile,
    users,
    poll,
    user
})

export default rootReducer;