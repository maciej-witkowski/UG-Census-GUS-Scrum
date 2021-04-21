import {FIND_USER, DELETE_USER, SET_INFO_ADMIN, UPDATE_POLLS} from "../actions/actionTypes";

const initialState = {
    user: {
        type: "",
        pesel: "",
        name: "",
        nationality: "",
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
        marital_status: "Żonaty",
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
        registered_address: {
            same: false,
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


const user = (state = initialState, action) => {
    switch(action.type) {
        case FIND_USER:
            if(action.payload.poll){
                return {
                    user: {...state.user, ...action.payload.poll}
                }
            } else {
                return {
                    user: {...state.user, 
                        name: action.payload.profile.firstName,
                        surname: action.payload.profile.lastName,
                        pesel: action.payload.profile.pesel
                    }
                }
            }         
        case DELETE_USER:
            return {
                ...state, ...initialState
            }
        case SET_INFO_ADMIN:
            return {
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        case UPDATE_POLLS:
            return {
                ...state, ...initialState
            }
        default:
            return state;
    }
}

export default user;