import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    user: state.user.user,
});

const PollSummaryAdmin = ({previousPage, user, dispatch, resetNum}) => {

    const [readyToReset, setReadyToReset] = useState(false);


    const sendPolls = () => {
        const readyInfo = {
            ...user,
            complition_date: user.complition_date === "" ? new Date() : user.complition_date,
            last_modified_date: new Date(),
            filled: true
        }
        alert(`Ankieta wysłana poprawnie`);
        dispatch(actions.updateUser(readyInfo));
        setReadyToReset(true);
    }

    useEffect (() => {
        if (readyToReset) {
            resetNum();
        }
    }, [readyToReset])

    useEffect(() => {
        console.log(user);

    }, [user])

    return (
        <div className={"box m-6 field is-centered"}>
                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Podstawowe dane</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Imię: {user.name}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nazwisko: {user.surname}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Pesel: {user.pesel}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kraj pochodzenia: {user.nationality}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Zamieszkanie w Polsce: {user.residence.type}</p>
                    </div>
                </div>
                {user.residence.type === "Tymczasowy meldunek"? (
                    <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Od kiedy: {user.residence.period.from}</p>
                    </div>
                    <div>
                        <p className={"label"}>Do kiedy: {user.residence.period.till}</p>
                    </div>
                </div>
                )
                : null
                }
                {user.disability.exists? (
                    <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Niepełnosprawność: Tak</p>
                    </div>
                    <div>
                        <p className={"label"}>Stopień: {user.disability.degree}</p>
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
                        <p className={"label"}>Data urodzenia: {user.date_of_birth}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Płeć: {user.sex}</p>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Wyznanie: {user.confession}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Stan cywilny: {user.marital_status}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Wykształcenie: {user.education}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim gospodarstwie domowym</p>
                    </div>
                </div>

                {user.household.children.exists? (
                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Dzieci: {user.household.children.number}</p>
                        </div>
                    <div>
                    {user.household.children.children.map((child, index) => 
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

                {user.household.living_with_parents.type === "Sam"?

                (<div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Mieszkasz: {user.household.living_with_parents.type}</p>
                    </div>
                </div>):null}

                {user.household.living_with_parents.type === "Z małżonkiem"?

                (<div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Mieszkasz: {user.household.living_with_parents.type}</p>
                    </div>

        
            
                <div>
                    <p className="label">Imię: {user.household.living_with_parents.people[0].name}</p>
                </div>
            
        
            
                <div>
                    <p className="label">Nazwisko: {user.household.living_with_parents.people[0].surname}</p>
                </div>
           
        
                <div>
                    <p className={"label"}>PESEL: {user.household.living_with_parents.people[0].pesel}</p>
                </div>
          
                </div>)
                
                :null}

            {user.household.living_with_parents.type === "Z partnerem"?

            (<div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className={"label"}>Mieszkasz: {user.household.living_with_parents.type}</p>
                </div>

           
            <div>
                <p className="label">Imię: {user.household.living_with_parents.people[0].name}</p>
            </div>
            

            <div>
                <p className="label">Nazwisko: {user.household.living_with_parents.people[0].surname}</p>
            </div>
            
            </div>)
            :null}


            {user.household.living_with_parents.type === "Ze współlokatorem"?

            (<div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className={"label"}>Mieszkasz: {user.household.living_with_parents.type}</p>
                </div>
            
            <div>
                <p className="label">Imię: {user.household.living_with_parents.people[0].name}</p>
            </div>
            

            
            <div>
                <p className="label">Nazwisko: {user.household.living_with_parents.people[0].surname}</p>
            </div>
            
            </div>)
            :null}


            {user.household.living_with_parents.type === "Z rodzicami"?

            (<div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className={"label"}>Mieszkasz: {user.household.living_with_parents.type}</p>
                </div>

            <div>
                <p className="label">Imię matki: {user.household.living_with_parents.people[0].name}</p>
            </div>
         

            
            <div>
                <p className="label">Nazwisko matki: {user.household.living_with_parents.people[0].surname}</p>
            </div>
           

           
            <div>
                <p className="label">Imię ojca: {user.household.living_with_parents.people[1].name}</p>
            </div>
            

            
            <div>
                <p className="label">Nazwisko ojca: {user.household.living_with_parents.people[1].surname}</p>
            </div>
            

            </div>)
            :null}

                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim adresie zamieszkania w dzieciństwie:</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Województwo: {user.address.place.voivodeship}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Powiat: {user.address.place.district}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Gmina: {user.address.place.community}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Miasto: {user.address.place.city}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Ulica: {user.address.street_name} {user.address.home_number}/{user.address.apartment_number}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy: {user.address.postal_code}</p>
                    </div>
                </div>
                
                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twoim obecnym adresie zamieszkania:</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Województwo: {user.registered_address.place.voivodeship}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Powiat: {user.registered_address.place.district}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Gmina: {user.registered_address.place.community}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Miasto: {user.registered_address.place.city}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Ulica: {user.registered_address.street_name} {user.registered_address.home_number}/{user.registered_address.apartment_number}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy: {user.registered_address.postal_code}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <div>
                        <p className={"subtitle has-text-danger-dark"}>Informacje o twojej pracy:</p>
                    </div>
                </div>

                {user.workplace.type === "bezrobotny"? (
                    <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Bezrobotny: Tak</p>
                    </div>
                    </div>
                ):
                (<div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Branża: {user.workplace.type}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Stanowisko: {user.workplace.job_title}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nazwa firmy: {user.workplace.name}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Województwo: {user.workplace.address.place.voivodeship}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Powiat: {user.workplace.address.place.district}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Gmina: {user.workplace.address.place.community}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Miasto: {user.workplace.address.place.city}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Ulica: {user.workplace.address.street_name} {user.workplace.address.home_number}/{user.workplace.address.apartment_number}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Kod pocztowy: {user.workplace.address.postal_code}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Rodzaj umowy: {user.workplace.contract}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Wynagrodzenie brutto: {user.workplace.monthly_earnings.brutto}</p>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                    <p className={"label"}>Wynagrodzenie netto: {user.workplace.monthly_earnings.netto}</p>
                    </div>
                </div>
     
                </div>
                )
            }




                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previousPage} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={sendPolls} className={"button is-success is-medium"} value="Wyślij ankietę"/>
                </div>
        </div>)
}



export default connect(mapStateToProps)(PollSummaryAdmin);