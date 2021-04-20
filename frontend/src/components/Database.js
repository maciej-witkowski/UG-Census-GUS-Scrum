import {React, useState} from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";
import BasicFormAdmin from './BasicFormAdmin'
import HouseholdFormAdmin from './HouseholdFormAdmin'
import AddressFormAdmin from './AddressFormAdmin.js'
import RegistrationAddressFromAdmin from './RegisteredAddressFromAdmin'
import WorkplaceFromAdmin from './WorkplaceFromAdmin'
import PollSummaryAdmin from './PollSummaryAdmin';
import axios from 'axios'


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

        axios.post("http://localhost:3000/users/getByPESEL", {pesel: userTmp.pesel})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(actions.findUser(data))
                if(data.user){
                    alert("Uzytkownik znaleziony")
                    setFind(true)
                } else {
                    alert("Nie ma takiego użytkownika")
                }
            })
            .catch(error => {
                throw (error);
            });
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
                        {num === 0 && (<BasicFormAdmin nextPage={nextPage} />)}
                        {num === 1 && (<HouseholdFormAdmin   nextPage={nextPage} previousPage={previousPage} />)}
                        {num === 2 && (<AddressFormAdmin nextPage={nextPage} previousPage={previousPage} />)}
                        {num === 3 && (<RegistrationAddressFromAdmin nextPage={nextPage} previousPage={previousPage} />)}
                        {num === 4 && (<WorkplaceFromAdmin nextPage={nextPage} previousPage={previousPage} deleteUser={deleteUser} resetNum={resetNum} />) }
                        {num === 5 && (<PollSummaryAdmin previousPage={previousPage} resetNum={resetNum} />) }
                    </div>
                </div>
            )}
        </div>
    )
}

export default connect(mapStateToProps)(Database);
