import React from 'react';
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import PollInputs from './PollInputs';


const mapStateToProps = state => ({
    poll: state.poll.poll,
})


const Polls = ({poll, dispatch}) => {
    const sendInfo = (event) => {
        event.preventDefault()
        const {
            name,
            pesel,
            nationality,
            disability,
            date,
            sex,
            confession,
            surname,
            marital,
            education,
            children,
            livingWithParents,
            partner,
            cityHousehold,
            streetHousehold,
            homeNumberHousehold,
            apartmentNumberHousehold,
            postCodeHousehold,
            city,
            street,
            homeNumber,
            apartmentNumber,
            postCode,
            type,
            nameWorkplace,
            cityWorkplace,
            streetWorkplace,
            homeNumberWorkplace,
            apartmentNumberWorkplace,
            postCodeWorkplace,
        } = event.target
    
        const readyInfo = {
            type: "",
            name: name.value,
            pesel: pesel.value,
            nationality: nationality.value,
            disability: disability.checked,
            date_of_birth: date.value,
            sex: sex.value,
            confession: confession.value,
            surname: surname.value,
            marital_status: marital.value,
            education: education.value,
            household: {
                children: children.value === "Tak" ? true : false,
                living_with_parents: livingWithParents.value === "Tak" ? true : false,
                partner: partner.value === "Tak" ? true : false
            },
            address: {
                city: cityHousehold.value,
                street_name: streetHousehold.value,
                home_number: homeNumberHousehold.value,
                apartment_number: apartmentNumberHousehold.value,
                postal_code: postCodeHousehold.value
            },
            registered_address: {
                city: city.value,
                street_name: street.value,
                home_number: homeNumber.value,
                apartment_number: apartmentNumber.value,
                postal_code: postCode.value
            },
            workplace: {
                type: type.value,
                name: nameWorkplace.value,
                address: {
                    city: cityWorkplace.value,
                    street_name: streetWorkplace.value,
                    home_number: homeNumberWorkplace.value,
                    apartment_number: apartmentNumberWorkplace.value,
                    postal_code: postCodeWorkplace.value
                }
            },
            complition_date: poll.complition_date === "" ? new Date() : poll.complition_date,
            last_modified_date: new Date(),
        }
    
        dispatch(actions.sendPolls(readyInfo))
    }

    return(
        <div>
            <h1 className="title">Ankiety</h1>
            <div>
                <PollInputs user={poll} sendInfo={sendInfo} />
            </div>
        </div>
    )

}
    
export default connect(mapStateToProps)(Polls);

