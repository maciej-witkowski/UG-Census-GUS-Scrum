const { Schema, model } = require("mongoose");

const pollSchema = new Schema({
    role: String,
    pesel: String,
    name: String,
    nationality: String,
    residence: {
        type: String,
        period: {
            from: Date,
            till: Date
        }
    },
    disability: {
        exists: Boolean,
        degree: String
    },
    date_of_birth: Date,
    sex: String,
    confession: String,
    surname: String,
    marital_status: String,
    education: String,
    household: {
        saved: Boolean,
        children: {
            exists: Boolean,
            number: Number,
            children: [Object]
        },
        living_with_parents: {
            type: String,
            people: [Object]
        }
    },
    address: {
        place: {
            voivodeship: String,
            district: String,
            community: String,
            city: String
        },
        street_name: String,
        home_number: String,
        apartment_number: Number,
        postal_code: String
    },
    registered_address: {
        same: Boolean,
        place: {
            voivodeship: String,
            district: String,
            community: String,
            city: String
        },
        street_name: String,
        home_number: String,
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
            home_number: String,
            apartment_number: Number,
            postal_code: String
        },
        job_title: String,
        contract: String,
        monthly_earnings: {
            brutto: Number,
            netto: Number
        }
    },
    complition_date: Date,
    last_modified_date: Date
},
    { typeKey: '$type' }
);

module.exports = model("Poll", pollSchema);
