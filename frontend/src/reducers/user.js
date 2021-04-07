import {FIND_USER} from "../actions/actionTypes";

const initialState = {
    user: {}
};


const user = (state = initialState, action) => {
    switch(action.type) {
        case FIND_USER:
            return {
                user: {...state.profile, ...action.payload}
            }
        default:
            return state;
    }
}

export default user;