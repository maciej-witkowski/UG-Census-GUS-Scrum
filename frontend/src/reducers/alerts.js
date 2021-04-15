import {SUCCESS, FAILURE} from "../actions/actionTypes";

const initialState = {
    success: false
};


const alerts = (state = initialState, action) => {
    switch(action.type) {
        case SUCCESS:
            return {
                success: true
            }
        case FAILURE:
            return {
                success: false
            }
        default:
            return state;
    }
}

export default alerts;