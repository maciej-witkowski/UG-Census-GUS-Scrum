import React, { useState, useEffect} from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    profile: state.profile.profile,
    users: state.users.users
})

const LogInForm = ({profile, users, dispatch}) => {
    const [warning, setWarning] = useState("")
    const [person, setPerson] = useState("user")

    useEffect(() => {
        dispatch(actions.getUsers());
        // as page loads - get all users from database - update redux memory
        // - to compare and allow logging in
        // check if user exists in the database - find user in db
        // compare password from database with the one typed when logging in
    }, []);

    const sendInfo = (event) => {
        event.preventDefault()
        const patternPesel = /^[0-9]{11}$/
        const {pesel, admin_id, password} = event.target
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
            if (admin_id.value === ""){
                admin_id.style.border = '2px solid #ff9999'
                setWarning("* ID jest wymagane")
                check = true
            } else {
                admin_id.style.border = 'none'
                admin_id.style.borderBottom = '1px solid #333'
            }
        }

        if(!check){
            let foundUser;
            if (person === 'user') {
                foundUser = users.filter(user => user.pesel === pesel.value);

            }
            if (person === 'admin') {
                foundUser = users.filter(user => user.admin_id === admin_id.value);
            }
            if (foundUser.length === 0) {
                alert("Użytkownik nie istnieje w bazie danych");
            }
            else {
                const user = foundUser[0];
                if (user.password === password.value && person === "user") {
                    dispatch(actions.logInUser(user));  // set redux profile
                    alert("Zostałeś poprawnie zalogowany");
                    event.target.reset();  // accept form
                }
                else if (user.password === password.value && person === "admin") {
                    dispatch(actions.logInAdmin(user));  // set redux profile
                    alert("Zostałeś poprawnie zalogowany");
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
        person === 'user' ? ['pesel', 'Pesel'] : ['admin_id', 'ID Admin '],
        ['password', 'Hasło']
    ]

    return (
        <div>
            <h1 className="title">Logowanie</h1>
            <div className={"box"}>
                <form className={"field"} onSubmit={sendInfo}>
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
                        {data.map(item => (
                            <CreateInput key={item[0]} info={item} />
                        ))}
                        <p style={{color: 'red'}}>{warning}</p>
                    </div>
                    <div className={"field has-text-centered"}>
                        <button className={"button is-success is-large"} type='submit'>Zatwierdź</button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default connect(mapStateToProps)(LogInForm);