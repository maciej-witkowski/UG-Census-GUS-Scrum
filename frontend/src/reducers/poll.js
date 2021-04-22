import {LOG_IN, LOG_OUT, SEND_POLLS, SET_INFO} from "../actions/actionTypes";

const initialState = {
    poll: {
        type: "",
        pesel: "",
        name: "",
        nationality: "Polska",
        residence: {
            type: "Stały meldunek",
            period: {
                from: "",
                till: ""
            }
        },
        disability: {
            exists: false,
            degree: "" // lekki, umiarkowany, znaczny
        },
        date_of_birth: "",
        sex: "Kobieta",
        confession: "",
        surname: "",
        marital_status: "Wolny",
        education: "Wykształcenie podstawowe",
        household: {
            saved: false,
            children: {
                exists: false,
                number: 0,
                children: [] // list of objects
            },
            living_with_parents: {
                type: "Sam",  // Sam, Z rodzicami, Z małżonkiem, Z partnerem, Ze wspólokatorem
                people: []
            }
        },
        address: {
            saved: false,
            place: {
                voivodeship: "Dolnośląskie",
                district: "",
                community: "",
                city: ""
            },
            street_name: "",
            home_number: "",
            apartment_number: 0,
            postal_code: ""
        },
        registered_address: {
            saved: false,
            same: false,
            place: {
                voivodeship: "Dolnośląskie",
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
                home_number: "",
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
        last_modified_date: "",
        filled: false,
        role: ""
    }
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
                    pesel: action.payload.profile.pesel,
                    role: action.payload.profile.role
                }
            }
        case LOG_OUT:
            return {
                ...state, ...initialState
            }
        case SEND_POLLS:
            if(state.poll.role){
                return {
                    ...state,
                    poll: {...state.poll, ...action.payload.poll},
                }
            } else {
                console.log(initialState.poll);
                return {
                    ...state,
                    poll: {...initialState.poll}
                }
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