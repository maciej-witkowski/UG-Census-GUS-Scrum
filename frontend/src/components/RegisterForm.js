import React from 'react';
import CreateInput from './CreateInput'

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
    ['imie', 'Imię*'],
    ['nazwisko', 'Nazwisko*'],
    ['pesel', 'Pesel*'], 
    ['hasło', 'Hasło*'],
    ['powHasło', 'Powtórz hasło*'],
]

const sendInfo = (event) => {
    const {imie, nazwisko, pesel, hasło, powHasło} = event.target
    console.log(imie.value)
    event.preventDefault()
}

const RegisterForm = () => (
    <div style={formStyle}>
        <h1>Rejestracja</h1>
        <form onSubmit={sendInfo}>
            {data.map(item => (
                <CreateInput key={item[0]} info = {item} />
            ))}
            <button style={buttonStyle} type='submit'>Zatwierdż</button> 
        </form>
        <h5>*Pola oznaczone gwiazdką są obowiązkowe</h5>
    </div>
)

export default RegisterForm;