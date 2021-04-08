import {React, useState} from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import PollInputs from './PollInputs';

const formStyle = {
    margin: 'auto',
    width: '50%',
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const data = [
    ['pesel', 'Pesel'], 
    ['imie', 'Imię'],
    ['nazwisko', 'Nazwisko']
]

const Database = ({user, dispatch}) => {
    const [find, setFind] = useState(false)

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
        <div style={formStyle}>
            <h1 className="title">Baza danych</h1>
            {!find ? (
                <form className={"box m-6"} onSubmit={sendFind}>
                    <div className={"field is-centered"}>
                        <h2 className={"subtitle"}>Wprowadż dane szukanego użytkownika:</h2>
                        <div>
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
                    <PollInputs user={user} sendInfo={sendUpdate} />
                    <input className={"button is-danger"} type="button" value="Usuń użytkownika" onClick={deleteUser} />
                </div>
            )}
        </div>
    )
}

export default connect(mapStateToProps)(Database);
