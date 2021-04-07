import {LOG_IN, LOG_OUT, SEND_POLLS} from "../actions/actionTypes";

const initialState = {
    profile: {},
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
            home_number: 0,
            apartment_number: 0,
            postal_code: 0
        },
        registered_address: {
            city: "",
            street_name: "",
            home_number: 0,
            apartment_number: 0,
            postal_code: 0
        },
        workplace: {
            type: "",
            name: "",
            address: {
                city: "",
                street_name: "",
                home_number: 0,
                apartment_number: 0,
                postal_code: 0
            }
        },
        complition_date: "",
        last_modified_date: ""
    }
};


const profile = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                poll: {...state.poll, 
                    name: action.payload.name,
                    surname: action.payload.surname,
                    pesel: action.payload.pesel
                },
                profile: {...state.profile, ...action.payload}
            }
        case LOG_OUT:
            return {
                ...state,
                profile: {}
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

export default profile;