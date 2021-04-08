import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import logo from '../logo.png';
import 'bulma/css/bulma.css';


const mapStateToProps = state => ({
    profile: state.profile.profile
})


const Nav = ({profile}) => {

    useEffect(()=> {
        Object.keys(profile).length !== 0? console.log(profile.role): console.log("No profile");
    }, [profile])



    return (
        <div className={"navbar box"}>
            <nav>
                <ul className={"navbar-menu"}>
                    <div className="navbar-brand">
                        <li className="navbar-start">
                            <Link className={"navbar-item"} to={"/"}>
                                <img src={logo} alt={"logo-gus"} width="100"/>
                                <h6 className={"title has-text-light"} >|</h6>
                            </Link>
                        </li>
                        <li className="navbar-item has-text-centered has-text-weight-bold"><Link  to={"/stats"}>Statystyki</Link></li>
                        <li className="navbar-item has-text-centered has-text-weight-bold"><Link  to={"/info"}>Informacje</Link></li>
                    </div>
                </ul>
            </nav>

            <div className="navbar-end">
                <div className="navbar-item">
                        {Object.keys(profile).length === 0? (<button className="button is-light mr-3"><Link className="button is-light" to={"/register"}>Rejestracja</Link></button>):null}
                        {Object.keys(profile).length === 0? (<button className="button is-info is-1"><Link className="button is-info" to={"/login"}>Logowanie</Link></button>):null}
                </div>
            </div>
            {/*przed zalogowaniem*/}
            <div>


            </div>

            {/*po zalogowaniu jako uzytkownik*/}
            {Object.keys(profile).length !== 0 && profile.role==="user"? (
            <ul className="navbar-end mt-1">
                <li><Link className="navbar-item has-text-centered has-text-weight-bold" to={"/polls"}>Ankiety</Link></li>
                <li><Link className="navbar-item has-text-centered has-text-weight-bold mr-3" to={"/profile"}>Profil</Link></li>
            </ul>
            ):null}
            

            {/*po zalogowaniu jako admin*/}
            {Object.keys(profile).length !== 0 && profile.role==="admin"? (
            <ul className="navbar-end mt-1">
                <li><Link  className="navbar-item has-text-centered has-text-weight-bold" to={"/db"}>Baza danych</Link></li>
                <li><Link  className="navbar-item has-text-centered has-text-weight-bold" to={"/add"}>Dodaj</Link></li>
                <li><Link className="navbar-item has-text-centered has-text-weight-bold mr-3" to={"/profile"}>Profil</Link></li>
            </ul>
            ):null}

            {/*po zalogowaniu zawsze*/}
            {Object.keys(profile).length !== 0?(<Link className="button is-danger" to={"/logout"}><button className="button is-danger is-1">Wylogowanie</button></Link>):null}
            
        </div>
    )
}

export default connect(mapStateToProps)(Nav);