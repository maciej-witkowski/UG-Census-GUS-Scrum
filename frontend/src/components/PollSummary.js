import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";
import axios from 'axios';

const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll,
});

const PollSummary = ({previousPage, profile, poll, dispatch, resetNum}) => {

    const [buttonClicked, setButtonClicked] = useState(false);
    const [readyToReset, setReadyToReset] = useState(false);


    const sendInfo = () => {
        // resetNum();
        const readyInfo = {
            ...poll,
            complition_date: poll.complition_date === "" ? new Date() : poll.complition_date,
            last_modified_date: new Date(),
        }
        dispatch(actions.sendPolls(readyInfo));
        setReadyToReset(true);
    }

    useEffect (() => {
        if (readyToReset) {
            resetNum();
        }
    }, [readyToReset])

    useEffect(() => {
        console.log(poll);

    }, [poll])


    const checkIfPollsExistsAndDisplayAlerts = () => {
        axios.get(`http://localhost:3000/polls/${poll.pesel}`).then(res => {
            console.log(res.data);
            if (res.data.length===0) { // if there is no poll for this pesel
                sendInfo();
                alert(`Ankieta wysłana poprawnie`);
                setButtonClicked(false);
            }
            else {
                alert(`Ankieta na podany pesel już istnieje`);
                setButtonClicked(false);
            }
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        if (buttonClicked) {
            checkIfPollsExistsAndDisplayAlerts();
        }

    }, [buttonClicked])


    const sendPoll = () => {
        setButtonClicked(true);
    }

    return (
        <div className={"box m-6 field is-centered"}>
                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Podstawowe dane</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Imię: {poll.name}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nazwisko: {poll.surname}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Pesel: {poll.pesel}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kraj pochodzenia: {poll.nationality}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Zamieszkanie w Polsce: {poll.residence.type}</p>
                    </div>
                </div>
                {poll.residence.type === "Tymczasowy meldunek"? (
                    <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Od kiedy: {poll.residence.period.from}</p>
                    </div>
                    <div>
                        <p className={"label"}>Do kiedy: {poll.residence.period.till}</p>
                    </div>
                </div>
                )
                : null
                }
                {poll.disability.exists? (
                    <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Niepełnosprawność: Tak</p>
                    </div>
                    <div>
                        <p className={"label"}>Stopień: {poll.disability.degree}</p>
                    </div>
                </div>
                )
                : (<div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className={"label"}>Niepełnosprawność: Nie</p>
                </div>
            </div>)
                }

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Data urodzenia: {poll.date_of_birth}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Płeć: {poll.sex}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Wyznanie: {poll.confession}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Stan cywilny: {poll.marital_status}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Wykształcenie: {poll.education}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim gospodarstwie domowym</p>
                    </div>
                </div>

                {poll.household.children.exists? (
                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Dzieci: {poll.household.children.number}</p>
                        </div>
                    <div>
                    {poll.household.children.children.map((child, index) => 
                            (<div key={index}>
                            <div>
                            <p className={"label"}>Dziecko {index+1}:</p>
                            </div>
                            <div>
                            <p className={"label"}>Imię: {child.name}</p>
                            </div>
                            <div>
                            <p className={"label"}>Nazwisko: {child.surname}</p>
                            </div>
                            <div>
                            <p className={"label"}>Pesel: {child.pesel}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                ) 
                
                : 
                
                (<div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className={"label"}>Dzieci: Brak</p>
                </div>
                </div>) }

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Mieszkasz: {poll.household.living_with}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim adresie zamieszkania w dzieciństwie:</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Województwo: {poll.address.place.voivodeship}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Powiat: {poll.address.place.district}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Gmina: {poll.address.place.community}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Miasto: {poll.address.place.city}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Ulica: {poll.address.street_name} {poll.address.home_number}/{poll.address.apartment_number}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy: {poll.address.postal_code}</p>
                    </div>
                </div>
                
                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim obecnym adresie zamieszkania:</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Województwo: {poll.registered_address.place.voivodeship}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Powiat: {poll.registered_address.place.district}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Gmina: {poll.registered_address.place.community}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Miasto: {poll.registered_address.place.city}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Ulica: {poll.registered_address.street_name} {poll.registered_address.home_number}/{poll.registered_address.apartment_number}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy: {poll.registered_address.postal_code}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twojej pracy:</p>
                    </div>
                </div>

                {poll.workplace.type === "bezrobotny"? (
                    <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Bezrobotny: Tak</p>
                    </div>
                    </div>
                ):
                (<div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Branża: {poll.workplace.type}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Stanowisko: {poll.workplace.job_title}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nazwa firmy: {poll.workplace.name}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Województwo: {poll.workplace.address.place.voivodeship}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Powiat: {poll.workplace.address.place.district}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Gmina: {poll.workplace.address.place.community}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Miasto: {poll.workplace.address.place.city}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Ulica: {poll.workplace.address.street_name} {poll.workplace.address.home_number}/{poll.workplace.address.apartment_number}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Kod pocztowy: {poll.workplace.address.postal_code}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Rodzaj umowy: {poll.workplace.contract}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Wynagrodzenie brutto: {poll.workplace.monthly_earnings.brutto}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Wynagrodzenie netto: {poll.workplace.monthly_earnings.netto}</p>
                    </div>
                </div>
     
                </div>
                )
            }




                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previousPage} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={sendPoll} className={"button is-success is-medium"} value="Wyślij ankietę"/>
                </div>
        </div>)
}



export default connect(mapStateToProps)(PollSummary);