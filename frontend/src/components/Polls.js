import {React, useState} from 'react';
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import BasicForm from './BasicForm'
import HouseholdForm from './HouseholdForm'
import AddressForm from './AddressForm.js'
import RegistrationAddressFrom from './RegisteredAddressFrom'
import WorkplaceFrom from './WorkplaceFrom'


const mapStateToProps = state => ({
    poll: state.poll.poll,
    read: state.poll.read,
    profile: state.profile.profile
})


const Polls = ({poll, profile, deleteUser, read, dispatch}) => {
    const [input, setInput] = useState(poll)
    const [num, setNum] = useState(0)
    
    const nextPage = () => {
        setNum(num + 1)
    }

    const previousPage = () => {
        setNum(num - 1)
    }

    const sendInfo = (event) => {
        const patternPesel = /^[0-9]{11}$/

        event.preventDefault()
        const {
            name,
            pesel,
            nationality,
            residence,
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
            voivodeshipHousehold,
            districtHousehold,
            communityHousehold,
            cityHousehold,
            streetHousehold,
            homeNumberHousehold,
            apartmentNumberHousehold,
            postCodeHousehold,
            voivodeship,
            district,
            community,
            city,
            street,
            homeNumber,
            apartmentNumber,
            postCode,
            type,
            nameWorkplace,
            voivodeshipWorkplace,
            districtWorkplace,
            communityWorkplace,
            cityWorkplace,
            streetWorkplace,
            homeNumberWorkplace,
            apartmentNumberWorkplace,
            postCodeWorkplace,
            jobTitle,
            contract,
            brutto,
            netto
        } = event.target

        const readyInfo = {
            type: "",
            name: name.value,
            pesel: pesel.value,
            nationality: nationality.value,
            residence: residence.checked === true ? "Tymczasowy meldunek" : "Stały meldunek",
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
                place: {
                    voivodeship: voivodeshipHousehold.value,
                    district: districtHousehold.value,
                    community: communityHousehold.value,
                    city: cityHousehold.value
                },
                street_name: streetHousehold.value,
                home_number: homeNumberHousehold.value,
                apartment_number: apartmentNumberHousehold.value,
                postal_code: postCodeHousehold.value
            },
            registered_address: {
                place: {
                    voivodeship: voivodeship.value,
                    district: district.value,
                    community: community.value,
                    city: city.value,
                },
                street_name: street.value,
                home_number: homeNumber.value,
                apartment_number: apartmentNumber.value,
                postal_code: postCode.value
            },
            workplace: {
                type: type.value,
                name: nameWorkplace.value,
                address: {
                    place: {
                        voivodeship: voivodeshipWorkplace.value,
                        district: districtWorkplace.value,
                        community: communityWorkplace.value,
                        city: cityWorkplace.value,
                    },
                    street_name: streetWorkplace.value,
                    home_number: homeNumberWorkplace.value,
                    apartment_number: apartmentNumberWorkplace.value,
                    postal_code: postCodeWorkplace.value
                },
                contract: contract.value,
                job_title: jobTitle.value,
                monthly_earnings: {
                    brutto: brutto.value,
                    netto: netto.value
                }
            },
            complition_date: poll.complition_date === "" ? new Date() : poll.complition_date,
            last_modified_date: new Date(),
        }

        if(name.value !== "" && surname.value !== "" && patternPesel.test(pesel.value)){
            dispatch(actions.sendPolls(readyInfo))
        } else {
            name.style.border = '2px solid #ff9999'
            surname.style.border = '2px solid #ff9999'
            pesel.style.border = '2px solid #ff9999'
        }
    }

    return(
        <div>
            <h1 className="title">Ankiety</h1>
            <div>
                <form onSubmit={sendInfo}>
                    <fieldset disabled={!read && !profile.admin_id ? "disabled" : ""}>
                        {num === 0 && (<BasicForm user={input} profile={profile} nextPage={nextPage} setInput={setInput}/>)}
                        {num === 1 && (<HouseholdForm user={input}  nextPage={nextPage} previousPage={previousPage} setInput={setInput}/>)}
                        {num === 2 && (<AddressForm user={input} nextPage={nextPage} previousPage={previousPage} setInput={setInput}/>)}
                        {num === 3 && (<RegistrationAddressFrom user={input} nextPage={nextPage} previousPage={previousPage} setInput={setInput}/>)}
                        {num === 4 && (<WorkplaceFrom user={input} previousPage={previousPage} profile={profile} deleteUser={deleteUser} setInput={setInput}/>)}
                    </fieldset>
                </form>
            </div>
        </div>
    )

}

export default connect(mapStateToProps)(Polls);

