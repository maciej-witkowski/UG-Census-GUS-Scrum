import {GET_POLLS} from "../actions/actionTypes";

const initialState = {
    polls: []
};


const polls = (state= initialState, action) => {
    switch(action.type) {
        case GET_POLLS:
            return {
                ...state,
                polls: [...action.payload]
            }
        default:
            return state;
    }
}

export default polls;
