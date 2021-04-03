import React, {useEffect} from 'react';
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profile: state.profile.profile
})


const Home = ({dispatch, profile}) => {

    // for testing
    const setUser = () => {
        const user = {
            role: "user",
            pesel: "98060799867"
        }
        dispatch(actions.logIn(user));
    }

    // for testing
    const setAdmin = () => {
        const admin = {
            role: "admin",
            admin_id: "ddfgfgd55"
        }
        dispatch(actions.logIn(admin));
    }

    useEffect(()=> {
        Object.keys(profile).length !== 0? console.log(profile.role): console.log("No profile");
    }, [profile])

    return(
    <div>
        <h1>Home</h1>
        <button onClick={setUser}>Set example user</button>
        <button onClick={setAdmin}>Set example admin</button>
    </div>)
}


export default connect(mapStateToProps)(Home);