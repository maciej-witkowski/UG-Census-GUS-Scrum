import {GET_VOIVODESHIPS} from "../actions/actionTypes";

const initialState = {
    voivodeships: [
        {
            voivodeship: "Dolnośląskie",
            // districts: [
            //     {
            //         district: "bolesławiecki",
            //         communities: ["Bolesławiec", "Gromadka", "Osiecznica", "Warta Bolesławiecka", "Nowogrodziec"]
            //     }, 
            //     {
            //         district: "dzierżoniowski",
            //         communities: ["Bolesławiec", "Gromadka", "Osiecznica", "Warta Bolesławiecka", "Nowogrodziec"]
            //     }
            // ]
        },
        {
            voivodeship: "Kujawsko-pomorskie",

        },
        {
            voivodeship: "Lubelskie",

        },
        {
            voivodeship: "Lubuskie",

        },
        {
            voivodeship: "Łódzkie",

        },
        {
            voivodeship: "Małopolskie",

        },
        {
            voivodeship: "Mazowieckie",

        },
        {
            voivodeship: "Opolskie",

        },
        {
            voivodeship: "Podkarpackie",

        },
        {
            voivodeship: "Podlaskie",

        },
        {
            voivodeship: "Pomorskie",

        },
        {
            voivodeship: "Śląskie",

        },

        {
            voivodeship: "Świętokrzyskie",

        },

        {
            voivodeship: "Warmińsko-mazurskie",

        },
        {
            voivodeship: "Wielkopolskie",

        },
        {
            voivodeship: "Zachodniopomorskie",

        }
    ]
};


const users = (state= initialState, action) => {
    switch(action.type) {
        case GET_VOIVODESHIPS:
            return state;
        default:
            return state;
    }
}

export default users;
