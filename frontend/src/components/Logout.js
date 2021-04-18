import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";
import { Redirect } from "react-router-dom"; 


const mapStateToProps = state => ({
    profile: state.profile.profile
})

const Logout = ({dispatch, profile}) => {

    const [redirctTo, setRedirctTo] = useState(false);

    useEffect(() => {
        alert("Zostałeś poprawnie wylogowany");
        dispatch(actions.logOut());  // profile = {}
    }, []);

    useEffect(() => {
        if (Object.keys(profile).length === 0) {
          setRedirctTo(true);
        }
    }, [profile])

    
    if(redirctTo){
        return <Redirect to="/" />
      } 

    else {
    return(<div>
    </div>)
    }
}

export default connect(mapStateToProps)(Logout);
