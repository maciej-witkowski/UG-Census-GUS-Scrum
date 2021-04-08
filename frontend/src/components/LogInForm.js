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
            let foundUser;
            if (person === 'user') {
                foundUser = users.filter(user => user.pesel === pesel.value);

            }
            if (person === 'admin') {
                foundUser = users.filter(user => user.admin_id === idAdmin.value);
            }
            if (foundUser.length === 0) {
                alert("Użytkownik nie istnieje w bazie danych");
            }
            else {
                const user = foundUser[0];
                if (user.password === hasło.value && person === "user") {
                    dispatch(actions.logInUser(user));  // set redux profile
                    event.target.reset();  // accept form
                }
                else if (user.password === hasło.value && person === "admin") {
                    dispatch(actions.logInAdmin(user));  // set redux profile
                    event.target.reset();  // accept form
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
            <h1 className="title">Logowanie</h1>
            <div className={"box m-6"}>
                <form onSubmit={sendInfo}>
                    <div className={"columns is-centered"}>
                        <input
                            className={"button is-large is-warning mt-6 mr-6 ml-6 mb-3"}
                            type="button"
                            value="Administrator"
                            onClick={() => switchPerson("admin")}/>
                        <input
                            className={"button is-large is-info mt-6 mr-6 ml-6 mb-4"}
                            type="button"
                            value="Użytkownik"
                            onClick={() => switchPerson("user")}/>
                    </div>
                    <div className={"ml-6"}>
                        {data.map(item => (
                            <CreateInput key={item[0]} info={item} />
                        ))}
                        <p style={{color: 'red'}}>{warning}</p>
                    </div>
                    <button className={"button is-success mb-4 ml-6 mt-3"} type='submit'>Zatwierdź</button>
                </form>
            </div>
        </div>
    )

}
export default connect(mapStateToProps)(LogInForm);