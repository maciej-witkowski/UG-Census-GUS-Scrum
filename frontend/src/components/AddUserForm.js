import React, { useState } from 'react';
import CreateInput from './CreateInput'
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const formStyle = {
    margin: 'auto',
    width: '50%',
}

const buttonStyle = {
    marginTop: '20px',
    padding: '10px',
    background: '#333',
    borderRadius: '5px',
    border: '1px solid #333',
    color: '#f2f2f2'
}

const data = [
    ['imie', 'Imię *'],
    ['nazwisko', 'Nazwisko *'],
    ['pesel', 'Pesel *'], 
    ['hasło', 'Hasło *'],
    ['powHasło', 'Powtórz hasło *'],
]

const mapStateToProps = state => ({
    poll: state.poll.poll,
    profile: state.profile.profile
})

const AddUserForm = ({poll, profile, dispatch}) => {
    const [warning, setWarning] = useState("")

    const sendInfo = (event) => {
        event.preventDefault()
        const {imie, nazwisko, pesel, hasło, powHasło} = event.target
        const patternPesel = /^[0-9]{11}$/
        const patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/
        let check = false
    
        if (!patternPassword.test(hasło.value) || hasło.value !== powHasło.value){
            hasło.style.border = '2px solid #ff9999'
            powHasło.style.border = '2px solid #ff9999'
            if (!patternPassword.test(hasło.value)){
                setWarning("* Hasło musi zawierać conajmniej: 1 małą literę, 1 wielką literę, 1 liczbe, 1 znak specjalny, 8 znaków")
            } else {
                setWarning("* Hasła nie są takie same")
            }
            check = true
        } else {
            hasło.style.border = 'none'
            powHasło.style.border = 'none'
            hasło.style.borderBottom = '1px solid #333'
            powHasło.style.borderBottom = '1px solid #333'
        }

        if (!patternPesel.test(pesel.value)){
            pesel.style.border = '2px solid #ff9999'
            setWarning("* Niepoprawny pesel")
            check = true
        } else {
            pesel.style.border = 'none'
            pesel.style.borderBottom = '1px solid #333'
        }
        
        if (nazwisko.value === ""){
            nazwisko.style.border = '2px solid #ff9999'
            setWarning("* Nazwisko jest wymagane")
            check = true
        } else {
            nazwisko.style.border = 'none'
            nazwisko.style.borderBottom = '1px solid #333'
        }

        if (imie.value === ""){
            imie.style.border = '2px solid #ff9999'
            setWarning("* Imie jest wymagane")
            check = true
        } else {
            imie.style.border = 'none'
            imie.style.borderBottom = '1px solid #333'
        }
        
        if (!check){
            const info = {
                imie: imie.value, 
                nazwisko: nazwisko.value, 
                pesel: pesel.value,
                haslo: hasło.value, 
                role: 'user'
            }
            dispatch(actions.register(info))
    
            setWarning("")
            event.target.submit();
        }
    }


    return(
        <div style={formStyle}>
            <h1 className="title">Dodaj użytkownika</h1>
            <div className={"box m-6"}>
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