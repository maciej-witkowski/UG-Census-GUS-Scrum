import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";


const mapStateToProps = state => ({
    profile: state.profile.profile
})


const navStyle = {
    backgroundColor: '#333',
    'overflow': 'hidden'
}

const linkStyle = {
    float: 'left',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    fontSize: '17px'
}


const Nav = ({profile, dispatch}) => {

    useEffect(()=> {
        Object.keys(profile).length !== 0? console.log(profile.role): console.log("No profile");
    }, [profile])

    const logout = () => {
        dispatch(actions.logOut());  // profile = {}
    }

    return (
        <div style={navStyle}>
            {/*zawsze*/}
            <Link style={linkStyle} to={"/"}>Home</Link>
            <Link style={linkStyle} to={"/stats"}>Statystyki</Link>
            <Link style={linkStyle} to={"/info"}>Informacje</Link>

            {/*przed zalogowaniem*/}
            {Object.keys(profile).length === 0? (<Link style={linkStyle} to={"/register"}>Rejestracja</Link>):null}
            {Object.keys(profile).length === 0? (<Link style={linkStyle} to={"/login"}>Logowanie</Link>):null}

            {/*po zalogowaniu jako uzytkownik*/}
            {Object.keys(profile).length !== 0 && profile.role==="user"? (<Link style={linkStyle} to={"/polls"}>Ankiety</Link>):null}

            {/*po zalogowaniu jako admin*/}
            {Object.keys(profile).length !== 0 && profile.role==="admin"? (<Link style={linkStyle} to={"/db"}>Baza danych</Link>):null}
            {Object.keys(profile).length !== 0 && profile.role==="admin"? (<Link style={linkStyle} to={"/add"}>Dodaj</Link>):null}

            {/*po zalogowaniu zawsze*/}
            {Object.keys(profile).length !== 0?(<button onClick={logout}>Wylogowanie</button>) : null}
            {Object.keys(profile).length !== 0? (<Link style={linkStyle} to={"/profile"}>Profile</Link>):null}
        </div>
    )
}

export default connect(mapStateToProps)(Nav);