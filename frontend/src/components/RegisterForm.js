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

const RegisterForm = ({poll, profile, dispatch}) => {
    const [warning, setWarning] = useState("")
    const [person, setPerson] = useState("user")

    const sendInfo = (event) => {
        event.preventDefault()
        const {name, surname, pesel, password, repeatPassword, admin_id} = event.target
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

        if (person === 'admin'){
            if (admin_id.value === ""){
                admin_id.style.border = '2px solid #ff9999'
                setWarning("* ID jest wymagane")
                check = true
            } else {
                admin_id.style.border = 'none'
                admin_id.style.borderBottom = '1px solid #333'
            }
        }
        
        if (!check){
            let info;
            if(person === 'admin'){
                info = {
                    firstName: name.value,
                    lastName: surname.value,
                    pesel: pesel.value,
                    password: password.value,
                    admin_id: admin_id.value,
                    role: 'admin'
                }
            }
            else{
                info = {
                    firstName: name.value,
                    lastName: surname.value,
                    pesel: pesel.value,
                    password: password.value,
                    role: 'user'
                }
            }
            
            dispatch(actions.register(info))
    
            setWarning("")
            event.target.reset();
        }
    }

    const switchPerson = (event) => {
        setPerson(event)
    }


    return(
        <div>
            <h1 className="title">Rejestracja</h1>
            <div className={"box"}>
                <form className={"field"}onSubmit={sendInfo}>
                    <div className={"columns is-centered is-flex-mobile"}>
                        <input
                            className={"button is-medium is-warning mt-6 mr-7 ml-6 mb-3"}
                            type="button"
                            value="Administrator"
                            onClick={() => switchPerson("admin")}/>
                        <input
                            className={"button is-medium is-info mt-6 mr-6 ml-6 mb-4"}
                            type="button"
                            value="Użytkownik"
                            onClick={() => switchPerson("user")}/>
                    </div>
                    <div className={"reg-input has-text-centered"}>
                        {person === "admin" && (
                            <CreateInput key='admin_id' info={['admin_id', 'ID Admin *']} />
                        )}
                        {data.map(item => (
                            <CreateInput key={item[0]} info={item} />
                        ))}
                        <p style={{color: 'red'}}>{warning}</p>
                    </div>
                    <div className={"field has-text-centered"}>
                        <button className={"button is-success is-large"} type='submit'>Zatwierdź</button>
                    </div>
                </form>
                <div className={"field has-text-centered"}>
                    <h5 className={"has-text-grey"}>* Pola oznaczone gwiazdką są obowiązkowe</h5>
                </div>
            </div>
        </div>)
}

export default connect(mapStateToProps)(RegisterForm);