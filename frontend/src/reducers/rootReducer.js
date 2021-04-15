import {combineReducers} from "redux";
import profile from "./profile";
import users from "./users";
import poll from './poll';
import user from './user';
import alerts from './alerts';

const rootReducer = combineReducers({
    profile,
    users,
    poll,
    user,
    alerts
})

export default rootReducer;