import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


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


const Nav = ({profile}) => {

    useEffect(()=> {
        Object.keys(profile).length !== 0? console.log(profile.role): console.log("No profile");
    }, [profile])



    return (
        <div style={navStyle}>
            {/*zawsze*/}

            {/*<img src="../../pics/logo.png" alt={"logo-gus"}/>*/}
            <Link style={linkStyle} to={"/"}>Strona główna</Link>
            <Link style={linkStyle} to={"/stats"}>Statystyki</Link>
            <Link style={linkStyle} to={"/info"}>Informacje</Link>

            {/*przed zalogowaniem*/}
            <div className={"register-links"}>
            {Object.keys(profile).length === 0? (<Link style={linkStyle} to={"/register"}>Rejestracja</Link>):null}
            {Object.keys(profile).length === 0? (<Link style={linkStyle} to={"/login"}>Logowanie</Link>):null}
            </div>

            {/*po zalogowaniu jako uzytkownik*/}
            {Object.keys(profile).length !== 0 && profile.role==="user"? (<Link style={linkStyle} to={"/polls"}>Ankiety</Link>):null}

            {/*po zalogowaniu jako admin*/}
            {Object.keys(profile).length !== 0 && profile.role==="admin"? (<Link style={linkStyle} to={"/db"}>Baza danych</Link>):null}
            {Object.keys(profile).length !== 0 && profile.role==="admin"? (<Link style={linkStyle} to={"/add"}>Dodaj</Link>):null}

            {/*po zalogowaniu zawsze*/}
            <div className={"register-links"}>
            {Object.keys(profile).length !== 0?(<Link style={linkStyle} to={"/logout"}>Wylogowanie</Link>):null}
            {Object.keys(profile).length !== 0? (<Link style={linkStyle} to={"/profile"}>Profil</Link>):null}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Nav);