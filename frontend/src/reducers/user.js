import {FIND_USER, DELETE_USER} from "../actions/actionTypes";

const initialState = {
    user: {
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
    }
};


const user = (state = initialState, action) => {
    switch(action.type) {
        case FIND_USER:
            return {
                user: {...state.user, ...action.payload.poll}
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