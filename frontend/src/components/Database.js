import {React, useState} from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import BasicForm from './BasicForm'
import HouseholdForm from './HouseholdForm'
import AddressForm from './AddressForm.js'
import RegistrationAddressFrom from './RegisteredAddressFrom'
import WorkplaceFrom from './WorkplaceFrom'
import PollSummary from './PollSummary'


const mapStateToProps = state => ({
    user: state.user.user,
})

const data = [
    ['pesel', 'Pesel'], 
    ['name', 'Imię'],
    ['surname', 'Nazwisko']
]

const Database = ({user, dispatch, read}) => {
    const [find, setFind] = useState(false)
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

    const sendFind = (event) => {
        const userTmp = {
            pesel: event.target.pesel.value
        }
        dispatch(actions.findUser(userTmp))
        setFind(true)
        event.preventDefault()
    }

    const deleteUser = () => {
        dispatch(actions.deleteUser(user.pesel))
        setFind(false)
    }
    
    return (
        <div>
            <h1 className="title">Baza danych</h1>
            {!find ? (
                <form className={"box m-6"} onSubmit={sendFind}>
                    <div className={"field is-centered has-text-centered"}>
                        <h2 className={"subtitle"}>Wprowadż dane szukanego użytkownika:</h2>
                        <div className={""}>
                            {data.map(item => (
                                <CreateInput key={item[0]} info = {item} />
                            ))}
                        </div>
                        <button className={"button is-success mt-5"} type="submit">Zatwierdź</button>
                    </div>
                </form>

            )
            :
            (
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
            )}
        </div>
    )
}

export default connect(mapStateToProps)(Database);
