import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import logo from '../logo.png';
import 'bulma/css/bulma.css';


const mapStateToProps = state => ({
    profile: state.profile.profile
})


const Nav = ({profile}) => {

    useEffect(()=> {}, [profile])

    return (
        <div className={"navbar box"}>
                <div className="navbar-brand">
                    <Link className={"navbar-item"} to={"/"}>
                            <img src={logo} alt={"logo-gus"} width="100"/>
                            <h6 className={"title has-text-light"} >|</h6>
                    </Link>
                    <div className="navbar-item has-text-centered has-text-weight-bold"><Link  to={"/stats"}>Statystyki</Link></div>
                    <div className="navbar-item has-text-centered has-text-weight-bold"><Link  to={"/info"}>Informacje</Link></div>
                </div>

                <div className={"navbar-menu"}>
                    <div className="navbar-start"></div>
                </div>

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
            <div className="navbar-end mt-1">
                <div className={"navbar-item"}>
                    <div><Link className="navbar-item has-text-centered has-text-weight-bold" to={"/polls"}>Ankiety</Link></div>
                    <div><Link className="navbar-item has-text-centered has-text-weight-bold mr-3" to={"/profile"}>Profil</Link></div>
                </div>
            </div>
            ):null}
            

            {/*po zalogowaniu jako admin*/}
            {Object.keys(profile).length !== 0 && profile.role==="admin"? (
            <div className="navbar-end mt-1">
                <div><Link  className="navbar-item has-text-centered has-text-weight-bold" to={"/db"}>Baza danych</Link></div>
                <div><Link  className="navbar-item has-text-centered has-text-weight-bold" to={"/add"}>Dodaj</Link></div>
                <div><Link className="navbar-item has-text-centered has-text-weight-bold mr-3" to={"/profile"}>Profil</Link></div>
            </div>
            ):null}

            {/*po zalogowaniu zawsze*/}
            {Object.keys(profile).length !== 0?(
                <div className="navbar-end has-text-centered">
                    <Link className="has-text-centered" to={"/logout"}><button className="button is-danger mt-2">Wylogowanie</button></Link>
                </div>
                    ):null}
                
        </div>
    )
}

export default connect(mapStateToProps)(Nav);