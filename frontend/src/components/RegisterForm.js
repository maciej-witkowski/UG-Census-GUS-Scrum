import React, { useState } from 'react';
import CreateInput from './CreateInput'
const axios = require('axios');

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

const RegisterForm = () => {
    const [warning, setWarning] = useState("")
    const [person, setPerson] = useState("user")

    const sendInfo = (event) => {
        event.preventDefault()
        const {imie, nazwisko, pesel, hasło, powHasło, idAdmin} = event.target
        const patternPesel = /^[0-9]{11}$/
        const patternPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
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

        if (person === 'admin'){
            if (idAdmin.value === ""){
                idAdmin.style.border = '2px solid #ff9999'
                setWarning("* ID jest wymagane")
                check = true
            } else {
                idAdmin.style.border = 'none'
                idAdmin.style.borderBottom = '1px solid #333'
            }
        }
        
        if (!check){
            axios.post('http://localhost:3000',
            {imie: imie.value, nazwisko: nazwisko.value, pesel: pesel.value, haslo: hasło.value, idAdmin: idAdmin.value, role: person})
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
    
            setWarning("")
            event.target.submit();
        }
    }

    const switchPerson = (event) => {
        setPerson(event)
    }


    return(
        <div style={formStyle}>
            <h1>Rejestracja</h1>
            <form onSubmit={sendInfo}>
                <div>
                    <input 
                        style={
                            {...buttonStyle, 
                            width: '40%',
                            margin: '20px'}
                        } 
                        type="button" 
                        value="Administrator" 
                        onClick={() => switchPerson("admin")}/>
                    <input 
                        style={
                            {...buttonStyle, 
                            width: '40%',
                            margin: '20px'}
                        } 
                        type="button" 
                        value="Użytkownik" 
                        onClick={() => switchPerson("user")}/>
                </div>
                {person === "admin" && (
                    <CreateInput key='idAdmin' info={['idAdmin', 'ID Admin *']} />
                )}
                {data.map(item => (
                    <CreateInput key={item[0]} info = {item} />
                ))}
                <p style={{color: 'red'}}>{warning}</p>
                <button style={buttonStyle} type='submit'>Zatwierdż</button> 
            </form>
            <h5>*Pola oznaczone gwiazdką są obowiązkowe</h5>
        </div>
    )
}

export default RegisterForm;