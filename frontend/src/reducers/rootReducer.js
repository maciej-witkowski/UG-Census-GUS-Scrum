import {combineReducers} from "redux";
import profile from "./profile";
import users from "./users";
import poll from './poll';
import user from './user';
import polls from './polls';


const rootReducer = combineReducers({
    profile,
    users,
    poll,
    user,
    polls
})

export default rootReducer;