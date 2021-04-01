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
    ['pesel', 'Pesel'], 
    ['hasło', 'Hasło']
]

const LogInForm = () => {
    const [warning, setWarning] = useState("")

    const sendInfo = (event) => {
        event.preventDefault()
        const patternPesel = /^[0-9]{11}$/
        const {pesel, hasło} = event.target
        let check = false
    
        if (!patternPesel.test(pesel.value)){
            pesel.style.border = '2px solid #ff9999'
            setWarning("* Niepoprawny pesel")
            check = true
        } else {
            pesel.style.border = 'none'
            pesel.style.borderBottom = '1px solid #333'
        }
    
        if(!check){
            axios.post('http://localhost:3000',
                {pesel: pesel.value, haslo: hasło.value})
                .then(response => {
                    console.log(response.data)
                })
                .catch(err => console.log(err))
            event.target.submit();
        }
    }

    return (
        <div style={formStyle}>
            <h1>Zaloguj się</h1>
            <form onSubmit={sendInfo}>
                {data.map(item => (
                    <CreateInput key={item[0]} info = {item} />
                ))}
                <p style={{color: 'red'}}>{warning}</p>
                <button style={buttonStyle} type='submit'>Zatwierdż</button> 
            </form>
        </div>
    )

}

export default LogInForm;