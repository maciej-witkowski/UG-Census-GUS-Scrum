import {LOG_IN, LOG_OUT, SEND_POLLS} from "../actions/actionTypes";

const initialState = {
    poll: {
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


const poll = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                poll: {...state.poll, ...action.payload},
            }
        case LOG_OUT:
            return {
                ...state, ...initialState
            }
        case SEND_POLLS:
            return {
                ...state,
                poll: {...state.poll, ...action.payload}
            }
        default:
            return state;
    }
}

export default poll;