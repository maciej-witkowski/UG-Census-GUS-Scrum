import {combineReducers} from "redux";
import profile from "./profile";
import poll from './poll';

const rootReducer = combineReducers({
    profile,
    poll
})

export default rootReducer;