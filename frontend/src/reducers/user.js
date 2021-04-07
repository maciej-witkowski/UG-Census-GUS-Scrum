import {FIND_USER, SEND_UPDATE, DELETE_USER} from "../actions/actionTypes";

const initialState = {
    user: {
        type: "",
        name: "",
        nationality: "",
        disability: false,
        date_of_birth: "",
        sex: "",
        confession: "",
        surname: "",
        marital_status: "",
        education: "",
        household: {
            children: false,
            living_with_parents: false,
            partner: false
        },
        address: {
            city: "",
            street_name: "",
            home_number: "",
            apartment_number: "",
            postal_code: ""
        },
        registered_address: {
            city: "",
            street_name: "",
            home_number: "",
            apartment_number: "",
            postal_code: ""
        },
        workplace: {
            type: "",
            name: "",
            address: {
                city: "",
                street_name: "",
                home_number: "",
                apartment_number: "",
                postal_code: ""
            }
        },
        complition_date: "",
        last_modified_date: ""
    }
};


const user = (state = initialState, action) => {
    switch(action.type) {
        case FIND_USER:
            return {
                user: {...state.user, ...action.payload}
            }
        case SEND_UPDATE:
            return {
                ...state, ...initialState
            }
        case DELETE_USER:
            return {
                ...state, ...initialState
            }
        default:
            return state;
    }
}

export default user;