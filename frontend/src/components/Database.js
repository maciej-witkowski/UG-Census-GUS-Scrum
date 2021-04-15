import {React, useState} from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import BasicForm from './BasicForm'
import HouseholdForm from './HouseholdForm'
import AddressForm from './AddressForm.js'
import RegistrationAddressFrom from './RegisteredAddressFrom'
import WorkplaceFrom from './WorkplaceFrom'


const mapStateToProps = state => ({
    user: state.user.user,
    profile: state.profile.profile
})

const data = [
    ['pesel', 'Pesel'], 
    ['name', 'Imię'],
    ['surname', 'Nazwisko']
]

const Database = ({user, dispatch, profile, read}) => {
    const [find, setFind] = useState(false)
    const [num, setNum] = useState(0)
    
    const nextPage = () => {
        setNum(num + 1)
    }

    const previousPage = () => {
        setNum(num - 1)
    }

    const sendFind = (event) => {
        const userTmp = {
            pesel: event.target.pesel.value
        }
        dispatch(actions.findUser(userTmp))
        setFind(true)
        event.preventDefault()
    }

    const sendUpdate = (event) => {
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
            brutto,
            netto
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
                job_title: jobTitle.value,
                monthly_earnings: {
                    brutto: brutto.value,
                    netto: netto.value
                }
            },
            complition_date: user.complition_date,
            last_modified_date: new Date(),
        }
        dispatch(actions.updateUser(readyInfo))
        setFind(false)
    }

    const deleteUser = () => {
        dispatch(actions.deleteUser(user.pesel))
        setFind(false)
    }
    
    return (
        <div>
            <h1 className="title">Baza danych</h1>
            {!find ? (
                <form className={"box m-6"} onSubmit={sendFind}>
                    <div className={"field is-centered has-text-centered"}>
                        <h2 className={"subtitle"}>Wprowadż dane szukanego użytkownika:</h2>
                        <div className={""}>
                            {data.map(item => (
                                <CreateInput key={item[0]} info = {item} />
                            ))}
                        </div>
                        <button className={"button is-success mt-5"} type="submit">Zatwierdź</button>
                    </div>
                </form>

            )
            :
            (
                <div>
                    <form onSubmit={sendUpdate}>
                        <fieldset disabled={!read && !profile.admin_id ? "disabled" : ""}>
                            {num === 0 && (<BasicForm user={user} profile={profile} nextPage={nextPage}/>)}
                            {num === 1 && (<HouseholdForm user={user}  nextPage={nextPage} previousPage={previousPage}/>)}
                            {num === 2 && (<AddressForm user={user} nextPage={nextPage} previousPage={previousPage}/>)}
                            {num === 3 && (<RegistrationAddressFrom user={user} nextPage={nextPage} previousPage={previousPage}/>)}
                            {num === 4 && (<WorkplaceFrom user={user} previousPage={previousPage} profile={profile} deleteUser={deleteUser}/>)}
                        </fieldset>
                    </form>
                </div>
            )}
        </div>
    )
}

export default connect(mapStateToProps)(Database);
