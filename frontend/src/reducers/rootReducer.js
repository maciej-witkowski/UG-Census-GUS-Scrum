import {combineReducers} from "redux";
import profile from "./profile";
import poll from './poll';
import user from './user';

const rootReducer = combineReducers({
    profile,
    poll,
    user
})

export default rootReducer;