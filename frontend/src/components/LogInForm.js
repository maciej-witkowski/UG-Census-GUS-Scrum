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

const LogInForm = () => {
    const [warning, setWarning] = useState("")
    const [person, setPerson] = useState("user")

    const sendInfo = (event) => {
        event.preventDefault()
        const patternPesel = /^[0-9]{11}$/
        const {pesel, idAdmin, hasło} = event.target
        let check = false
    
        if (person === 'user'){
            if (!patternPesel.test(pesel.value)){
                pesel.style.border = '2px solid #ff9999'
                setWarning("* Niepoprawny pesel")
                check = true
            } else {
                pesel.style.border = 'none'
                pesel.style.borderBottom = '1px solid #333'
            }
        } else {
            if (idAdmin.value === ""){
                idAdmin.style.border = '2px solid #ff9999'
                setWarning("* ID jest wymagane")
                check = true
            } else {
                idAdmin.style.border = 'none'
                idAdmin.style.borderBottom = '1px solid #333'
            }
        }

        if(!check){
            axios.post('http://localhost:3000',
                {pesel: pesel.value, idAdmin: idAdmin, role: person, haslo: hasło.value})
                .then(response => {
                    console.log(response.data)
                })
                .catch(err => console.log(err))
            event.target.submit();
        }
    }

    const switchPerson = (event) => {
        setPerson(event)
    }

    const data = [
        person === 'user' ? ['pesel', 'Pesel'] : ['idAdmin', 'ID Admin *'], 
        ['hasło', 'Hasło']
    ]

    return (
        <div style={formStyle}>
            <h1>Zaloguj się</h1>
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
                {data.map(item => (
                    <CreateInput key={item[0]} info = {item} />
                ))}
                <p style={{color: 'red'}}>{warning}</p>
                <button style={buttonStyle} type='submit'>Zatwierdź</button>
            </form>
        </div>
    )

}

export default LogInForm;