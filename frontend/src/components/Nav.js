import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    profile: state.profile.profile
})


const Nav = ({profile}) => {

    useEffect(()=> {
        Object.keys(profile).length !== 0? console.log(profile.role): console.log("No profile");
    }, [profile])



    return (
        <div className="header">
            {/*zawsze*/}
            {/*<img src="../../pics/logo.png" alt={"logo-gus"}/>*/}
            <div className="logo">GOV.PL</div>
            <nav>
                <ul className="nav_links">
                    <li><Link  className="nav_links" to={"/"}>Home</Link></li>
                    <li><Link  className="nav_links" to={"/stats"}>Statystyki</Link></li>
                    <li><Link  className="nav_links" to={"/info"}>Informacje</Link></li>
                </ul>
            </nav>
            
            

            {/*przed zalogowaniem*/}
            <div>
            {Object.keys(profile).length === 0? (<button className="cta"><Link className="cta" to={"/register"}>Rejestracja</Link></button>):null}
            {Object.keys(profile).length === 0? (<button className="cta"><Link  className="cta" to={"/login"}>Logowanie</Link></button>):null}
            </div>

            {/*po zalogowaniu jako uzytkownik*/}
            {Object.keys(profile).length !== 0 && profile.role==="user"? (
            <ul className="nav_links">
                <li><Link className="nav_links2" to={"/polls"}>Ankiety</Link></li>
                <li><Link className="nav_links2" to={"/profile"}>Profil</Link></li>
            </ul>
            ):null}
            

            {/*po zalogowaniu jako admin*/}
            {Object.keys(profile).length !== 0 && profile.role==="admin"? (
            <ul className="nav_links">
                <li><Link  className="nav_links2" to={"/db"}>Baza danych</Link></li>
                <li><Link  className="nav_links2" to={"/add"}>Dodaj</Link></li>
                <li><Link className="nav_links2" to={"/profile"}>Profil</Link></li>
            </ul>
            ):null}

            {/*po zalogowaniu zawsze*/}
            {Object.keys(profile).length !== 0?(<Link className="nav_links" to={"/logout"}><button className="cta">Wylogowanie</button></Link>):null}
            
        </div>
    )
}

export default connect(mapStateToProps)(Nav);