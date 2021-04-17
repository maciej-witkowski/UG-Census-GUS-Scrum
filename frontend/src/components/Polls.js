import {React, useState, useEffect} from 'react';
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import BasicForm from './BasicForm'
import HouseholdForm from './HouseholdForm'
import AddressForm from './AddressForm.js'
import RegistrationAddressFrom from './RegisteredAddressFrom'
import WorkplaceFrom from './WorkplaceFrom'
import PollSummary from './PollSummary';


const mapStateToProps = state => ({
    poll: state.poll.poll,
    read: state.poll.read,
})


const Polls = ({deleteUser, read, dispatch}) => {
    const [num, setNum] = useState(0)
    
    const nextPage = () => {
        setNum(num + 1)
    }

    const previousPage = () => {
        setNum(num - 1)
    }

    const resetNum = () => {
        setNum(0)
        window.location.reload()
    }

    return(
        <div>
            {num === 5?(<h1 className="title">Podsumowanie</h1>):null}
            <div>
                {/* <form onSubmit={sendInfo}> */}
                    {/* <fieldset disabled={!read && !profile.admin_id ? "disabled" : ""}> */}
                        {num === 0 && (<BasicForm nextPage={nextPage} />)}
                        {num === 1 && (<HouseholdForm   nextPage={nextPage} previousPage={previousPage} />)}
                        {num === 2 && (<AddressForm nextPage={nextPage} previousPage={previousPage} />)}
                        {num === 3 && (<RegistrationAddressFrom nextPage={nextPage} previousPage={previousPage} />)}
                        {num === 4 && (<WorkplaceFrom nextPage={nextPage} previousPage={previousPage} deleteUser={deleteUser} resetNum={resetNum} />) }
                        {num === 5 && (<PollSummary previousPage={previousPage} resetNum={resetNum} />) }
                    {/* </fieldset> */}
                {/* </form> */}
            </div>
        </div>
    )

}

export default connect(mapStateToProps)(Polls);

