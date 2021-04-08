import React from 'react';
import {connect} from "react-redux";
import userIcon from '../userIcon.png';
import adminIcon from '../adminIcon.png';

const Profile = ({profile}) => (
    <div>
        <h1 className="title">Profil</h1>
        <div className={"box m-6"}>
            {profile.role === "user" ?
            <div className={"has-text-centered"}>
                <h2 className={"title has-text-danger-dark"}>Użytkownik {profile.firstName}</h2>
                <div className={"columns is-centered"}>
                    <figure className="image is-128x128 is-centered mb-5">
                        <img src={userIcon} alt={"usericon"}/>
                    </figure>
                </div>
            </div>
                :
                <div className={"has-text-centered"}>
                    <h2 className={"title has-text-danger-dark"}>Administrator {profile.firstName}</h2>
                    <div className={"columns is-centered"}>
                        <figure className="image is-128x128 is-centered mb-5">
                            <img src={adminIcon} alt={"adminicon"}/>
                        </figure>
                    </div>
                </div>}
                <div className={"box m-6"}>
                    <p className={"label"}>
                        Imie: <b className={"has-text-bordered has-text-success-dark"}>{profile.firstName}</b>
                    </p>
                    <p className={"label"}>
                        Nazwisko: <b className={"has-text-bordered has-text-success-dark"}>{profile.lastName}</b>
                    </p>
                    <p className={"label"}>
                        PESEL: <b className={"has-text-bordered has-text-success-dark"}>{profile.pesel}</b>
                    </p>
                    {profile.role === "admin" ?
                        <div>
                            <p className={"label"}>
                                ID: <b className={"has-text-bordered has-text-success-dark"}>{profile.admin_id}</b>
                            </p>
                        </div>
                    : <></>}
                </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    profile: state.profile.profile
});

export default connect(mapStateToProps)(Profile);
