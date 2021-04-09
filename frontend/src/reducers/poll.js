import {LOG_IN, LOG_OUT, SEND_POLLS} from "../actions/actionTypes";

const initialState = {
    poll: {
        type: "",
        name: "",
        pesel: "",
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
            postal_code: ''
        },
        registered_address: {
            city: "",
            street_name: "",
            home_number: 0,
            apartment_number: 0,
            postal_code: ""
        },
        workplace: {
            type: "",
            name: "",
            address: {
                city: "",
                street_name: "",
                home_number: 0,
                apartment_number: 0,
                postal_code: ""
            }
        },
        complition_date: "",
        last_modified_date: ""
    },
    read: false
};


const poll = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                poll: {
                    ...state.poll,
                    ...action.payload.poll,
                    name: action.payload.profile.firstName,
                    surname: action.payload.profile.lastName,
                    pesel: action.payload.profile.pesel
                },
                read: action.payload.poll === null ? true : false
            }
        case LOG_OUT:
            return {
                ...state, ...initialState
            }
        case SEND_POLLS:
            return {
                ...state,
                poll: {...state.poll, ...action.payload.poll},
                read: false
            }
        default:
            return state;
    }
}

export default poll;