import React, { useState } from 'react';
import CreateInput from './CreateInput'
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";


const data = [
    ['name', 'Imię *'],
    ['surname', 'Nazwisko *'],
    ['pesel', 'Pesel *'], 
    ['password', 'Hasło *'],
    ['repeatPassword', 'Powtórz hasło *'],
]

const mapStateToProps = state => ({
    poll: state.poll.poll,
    profile: state.profile.profile
})

const AddUserForm = ({poll, profile, dispatch}) => {
    const [warning, setWarning] = useState("")

    const sendInfo = (event) => {
        event.preventDefault()
        const {name, surname, pesel, password, repeatPassword} = event.target
        const patternPesel = /^[0-9]{11}$/
        const patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/
        let check = false
    
        if (!patternPassword.test(password.value) || password.value !== repeatPassword.value){
            password.style.border = '2px solid #ff9999'
            repeatPassword.style.border = '2px solid #ff9999'
            if (!patternPassword.test(password.value)){
                setWarning("* Hasło musi zawierać conajmniej: 1 małą literę, 1 wielką literę, 1 liczbe, 1 znak specjalny, 8 znaków")
            } else {
                setWarning("* Hasła nie są takie same")
            }
            check = true
        } else {
            password.style.border = 'none'
            repeatPassword.style.border = 'none'
            password.style.borderBottom = '1px solid #333'
            repeatPassword.style.borderBottom = '1px solid #333'
        }

        if (!patternPesel.test(pesel.value)){
            pesel.style.border = '2px solid #ff9999'
            setWarning("* Niepoprawny pesel")
            check = true
        } else {
            pesel.style.border = 'none'
            pesel.style.borderBottom = '1px solid #333'
        }
        
        if (surname.value === ""){
            surname.style.border = '2px solid #ff9999'
            setWarning("* Nazwisko jest wymagane")
            check = true
        } else {
            surname.style.border = 'none'
            surname.style.borderBottom = '1px solid #333'
        }

        if (name.value === ""){
            name.style.border = '2px solid #ff9999'
            setWarning("* Imie jest wymagane")
            check = true
        } else {
            name.style.border = 'none'
            name.style.borderBottom = '1px solid #333'
        }
        
        if (!check){
            const info = {
                firstName: name.value,
                lastName: surname.value,
                pesel: pesel.value,
                password: password.value,
                role: 'user'
            }

            dispatch(actions.register(info))
            event.target.reset();
        }
    }


    return(
        <div>
            <h1 className="title">Dodaj użytkownika</h1>
            <div className={"box m-6 is-centered has-text-centered"}>
                <form onSubmit={sendInfo}>
                    {data.map(item => (
                        <CreateInput key={item[0]} info = {item} />
                    ))}
                    <p style={{color: 'red'}}>{warning}</p>
                    <button className={"button is-success mb-4"} type='submit'>Zatwierdź</button>
                </form>
                <h5>*Pola oznaczone gwiazdką są obowiązkowe</h5>
            </div>

        </div>
    )
}

export default connect(mapStateToProps)(AddUserForm);