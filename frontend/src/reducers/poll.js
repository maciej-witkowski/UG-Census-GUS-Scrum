import {LOG_IN, LOG_OUT, SEND_POLLS, SET_NATIONALITY, SET_DISABILITY, SET_DATE, SET_INFO} from "../actions/actionTypes";

const initialState = {
    poll: {
        type: "",
        pesel: "",
        name: "",
        nationality: "",
        residence: "Stały meldunek",
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
            place: {
                voivodeship: "",
                district: "",
                community: "",
                city: ""
            },
            street_name: "",
            home_number: 0,
            apartment_number: 0,
            postal_code: ""
        },
        registered_address: {
            place: {
                voivodeship: "",
                district: "",
                community: "",
                city: ""
            },
            street_name: "",
            home_number: 0,
            apartment_number: 0,
            postal_code: ""
        },
        workplace: {
            type: "",
            name: "",
            address: {
                place: {
                    voivodeship: "",
                    district: "",
                    community: "",
                    city: ""
                },
                street_name: "",
                home_number: 0,
                apartment_number: 0,
                postal_code: ""
            },
            job_title: "",
            contract: "",
            monthly_earnings: {
                brutto: 0,
                netto: 0
            }
        },
        complition_date: "",
        last_modified_date: ""
    },
    read: true
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
                read: action.payload.poll !== null ? false : true
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
        case SET_INFO:
            return {
                poll: {
                    ...state.poll,
                    ...action.payload
                }
            }
        default:
            return state;
    }
}

export default poll;