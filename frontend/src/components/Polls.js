import {React, useState} from 'react';
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import BasicForm from './BasicForm'
import HouseholdForm from './HouseholdForm'
import AddressForm from './AddressForm.js'
import RegistrationAddressFrom from './RegisteredAddressFrom'
import WorkplaceFrom from './WorkplaceFrom'


const mapStateToProps = state => ({
    poll: state.poll.poll,
    read: state.poll.read,
    profile: state.profile.profile
})


const Polls = ({poll, profile, deleteUser, read, dispatch}) => {
    const [input, setInput] = useState(poll)
    const [num, setNum] = useState(0)
    
    const nextPage = () => {
        setNum(num + 1)
    }

    const previousPage = () => {
        setNum(num - 1)
    }

    return(
        <div>
            <h1 className="title">Ankiety</h1>
            <div>
                {/* <form onSubmit={sendInfo}> */}
                    {/* <fieldset disabled={!read && !profile.admin_id ? "disabled" : ""}> */}
                        {num === 0 && (<BasicForm user={input} profile={profile} nextPage={nextPage} setInput={setInput}/>)}
                        {num === 1 && (<HouseholdForm user={input}  nextPage={nextPage} previousPage={previousPage} setInput={setInput}/>)}
                        {num === 2 && (<AddressForm user={input} nextPage={nextPage} previousPage={previousPage} setInput={setInput}/>)}
                        {num === 3 && (<RegistrationAddressFrom user={input} nextPage={nextPage} previousPage={previousPage} setInput={setInput}/>)}
                        {num === 4 && (<WorkplaceFrom user={input} previousPage={previousPage} profile={profile} deleteUser={deleteUser} setInput={setInput}/>) }
                    {/* </fieldset> */}
                {/* </form> */}
            </div>
        </div>
    )

}

export default connect(mapStateToProps)(Polls);

