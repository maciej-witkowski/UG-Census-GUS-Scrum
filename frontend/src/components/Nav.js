import React from "react";
import {Link} from "react-router-dom";

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

const Navbar = () => {

    return (
        <div style={navStyle}>
            <Link style={linkStyle} to={"/"}>Home</Link>
            <Link style={linkStyle} to={"/register"}>Rejestracja</Link>
            <Link style={linkStyle} to={"/login"}>Logowanie</Link>
        </div>
    )
}

export default Navbar;