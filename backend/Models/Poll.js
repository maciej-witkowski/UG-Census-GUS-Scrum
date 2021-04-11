const { Schema, model } = require("mongoose");

const pollSchema = new Schema({
    type: String,
    pesel: String,
    name: String,
    nationality: String,
    disability: Boolean,
    date_of_birth: Date,
    sex: String,
    confession: String,
    surname: String,
    marital_status: String,
    education: String,
    household: {
        children: Boolean,
        living_with_parents: Boolean,
        partner: Boolean
    },
    address: {
        place: {
            voivodeship: String,
            district: String,
            community: String,
            city: String
        },
        street_name: String,
        home_number: Number,
        apartment_number: Number,
        postal_code: String
    },
    registered_address: {
        place: {
            voivodeship: String,
            district: String,
            community: String,
            city: String
        },
        street_name: String,
        home_number: Number,
        apartment_number: Number,
        postal_code: String
    },
    workplace: {
        type: String,
        name: String,
        address: {
            place: {
                voivodeship: String,
                district: String,
                community: String,
                city: String
            },
            street_name: String,
            home_number: Number,
            apartment_number: Number,
            postal_code: String
        },
        job_title: String,
        monthly_earnings: {
            brutto: Number,
            netto: Number
        }
    },
    complition_date: Date,
    last_modified_date: Date,
},
    { typeKey: '$type' }
);

module.exports = model("Poll", pollSchema);
