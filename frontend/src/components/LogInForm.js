import React, { useState, useEffect} from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";

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

const mapStateToProps = state => ({
    profile: state.profile.profile,
    users: state.users.users
})

const LogInForm = ({profile, users, dispatch}) => {
    const [warning, setWarning] = useState("")
    const [person, setPerson] = useState("user")

    useEffect(() => {
        dispatch(actions.getUsers()); // as page loads - get all users from database - update redux memory
        // - to compare and allow logging in
        // check if user exists in the database - find user in db
        // compare password from database with the one typed when logging in
    }, [])

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
            const info = {
                pesel: pesel.value, 
                idAdmin: idAdmin, 
                role: person, 
                haslo: hasło.value
            }

            let foundUser;
            if (info.role === 'user') {
                foundUser = users.filter(user => user.pesel === info.pesel);
            }
            if (info.role === 'admin') {
                foundUser = users.filter(user => user.admin_id === info.idAdmin);
            }
            if (foundUser.length === 0) {
                alert("Użytkownik nie istnieje w bazie danych");
            }
            else {
                const user = foundUser[0];
                console.log(user);
                console.log(user.password);
                console.log(info.haslo);
                if (user.password === info.haslo) {
                    dispatch(actions.logIn(user));  // set redux profile
                    event.target.submit();  // accept form
                }
                else {
                    alert("Niepoprawne hasło! Spróbuj ponownie.");
                }
            }
        }
    }

    const switchPerson = (event) => {
        setPerson(event)
    }

    const data = [
        person === 'user' ? ['pesel', 'Pesel'] : ['idAdmin', 'ID Admin '],
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
export default connect(mapStateToProps)(LogInForm);