import React, {useEffect} from 'react';
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import spis from '../spis.jpg';
import pytanie1 from '../pytanie1.png';
import pytanie2 from '../pytanie2.png';
import pytanie3 from '../pytanie3.png';
import gus from '../gus.png';
import icons from '../icons.png';
import logo2 from '../logo2.png';

const mapStateToProps = state => ({
    profile: state.profile.profile
})


const Home = ({dispatch, profile}) => {

    useEffect(()=> {
        Object.keys(profile).length !== 0? console.log(profile.role): console.log("No profile");
    }, [profile])

    return(
        <div className={"home"}>
            {/*<button className="test" onClick={setUser}>Set example user</button>*/}
            {/*<button className="test" onClick={setAdmin}>Set example admin</button>*/}
            <div className={"left-box"}>
                <img src={spis} id="Spis" alt="Spis"/>
            </div>
            <div className={"footer"}>
                <img src={logo2} id="logo2" alt="logo2"/>
                <div className={"address"}>
                    <img src={gus} alt="gus"/>
                    <div style={{"color": "black", "fontSize": "1.2em"}}>
                        Ul. Kolorowa 57
                        02-999 Warszawa
                    </div>
                </div>
                <img src={icons} id="icons" alt="icons"/>
            </div>

            <div className={"right-box"}>
                <img src={pytanie1} id="pytanie1" alt="pytanie1"/>
                <img src={pytanie2} id="pytanie2" alt="pytanie2"/>
                <img src={pytanie3} id="pytanie3" alt="pytanie3"/>
            </div>
        </div>)
}


export default connect(mapStateToProps)(Home);