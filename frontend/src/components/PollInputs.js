import axios from 'axios'
import { useEffect, useState } from 'react'

const PollInputs = ({sendInfo, user}) => {
    const [alreadySent, setAlreadySent] = useState(false)
    useEffect( async ()=>{
        await axios.post("http://localhost:3000/users/getByPESEL", {pesel: user.pesel})
        .then(response => setAlreadySent(response.data.poll))
        .catch(err => alert(err))
    })
    return (
        <form className={"box ml-6 mr-6 mb-6"} onSubmit={sendInfo}>

            <div className={"field is-centered"}>
                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className="label">Twoje imie:</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name="name" defaultValue={user.name} placeholder={"Imie"} readOnly/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className="label">Twoje nazwisko:</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name="surname" defaultValue={user.surname} placeholder={"Nazwisko"} readOnly/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Twój PESEL:</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name="pesel" defaultValue={user.pesel} placeholder={"PESEL"} readOnly/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest twój kraj pochodzenia:</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name="nationality" defaultValue={user.nationality} placeholder={"Kraj pochodzenia"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Czy jesteś niepełnosprawny?</p>
                    </div>
                    <div className={"checkbox"}>
                        <input className={"checkbox is-primary"} type="checkbox" name='disability' defaultChecked={user.disability}/> Tak
                    </div>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Data Twoich urodzin:</p>
                    </div>
                    <input className={"input is-info mr-6"} type="date" name='date' defaultValue={user.date_of_birth} placeholder={"YYYY-MM-DD"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Płeć</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='sex' defaultValue={user.sex}>
                                        <option value='Kobieta'>Kobieta</option>
                                        <option value='Mężczyzna'>Mężczyzna</option>
                                        <option value='Wole nie odpowiadać'>Wole nie odpowiadać</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Jakie jest twoje wyznanie?</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='confession' defaultValue={user.confession} placeholder={"Wyznanie"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest Twój stan cywilny?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='marital' defaultValue={user.marital_status}>
                                        <option value='Żonaty'>Żonaty</option>
                                        <option value='Zamężna'>Zamężna</option>
                                        <option value='Wdowiec'>Wdowiec</option>
                                        <option value='Wdowa'>Wdowa</option>
                                        <option value='Rozwiedziony'>Rozwiedziony</option>
                                        <option value='Rozwiedziona'>Rozwiedziona</option>
                                        <option value='Separowany'>Separowany</option>
                                        <option value='Separowana'>Separowana</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Jakie jest Twoje wykształcenie?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='education' defaultValue={user.education}>
                                        <option value='podstawowe'>Wykształcenie podstawowe</option>
                                        <option value='gimnazjalne'>Wykształcenie gimnazjalne</option>
                                        <option value='zawodowe'>Wykształcenie zasadnicze zawodowe</option>
                                        <option value='średnie'>Wykształcenie średnie</option>
                                        <option value='wyższe'>Wykształcenie wyższe</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-6 is-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim gospodarstwie domowym:</p>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Czy masz dzieci?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='children' defaultValue={user.household.children === true ? 'Tak' : 'Nie'}>
                                            <option value="Tak">Tak</option>
                                            <option value="Nie">Nie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Czy mieszkasz z rodzicami?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='livingWithParents' defaultValue={user.household.living_with_parents === true ? 'Tak' : 'Nie'}>
                                        <option value="Tak">Tak</option>
                                        <option value="Nie">Nie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Czy masz partnera/partnerkę?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='partner' defaultValue={user.household.partner === true ? 'Tak' : 'Nie'}>
                                        <option value="Tak">Tak</option>
                                        <option value="Nie">Nie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-6 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim adresie zamieszkania w dzieciństwie:</p>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='cityHousehold' defaultValue={user.address.city} placeholder={"Miasto"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy:</p>
                    </div>
                    <input  className={"input is-info mr-6"} type="text" name='streetHousehold' defaultValue={user.address.street_name} placeholder={"Ulica"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Nr domu</p>
                    </div>
                    <input  className={"input is-info mr-6"} type="number" name='homeNumberHousehold' min="0" defaultValue={user.address.home_number} placeholder={"Numer domu"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info mr-6"} type="number" name='apartmentNumberHousehold' min="0" defaultValue={user.address.apartment_number} placeholder={"Numer lokalu"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name="postCodeHousehold" defaultValue={user.address.postal_code} placeholder={"Kod pocztowy"}/>
                </div>

                <div className={"column is-centered mx-6 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim obecnym adresie zamieszkania:</p>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście mieszkasz?</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='city' defaultValue={user.registered_address.city} placeholder={"Miasto"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='street' defaultValue={user.registered_address.street_name} placeholder={"Ulica"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Nr domu</p>
                    </div>
                    <input className={"input is-info mr-6"} type="number" name='homeNumber' min="0" defaultValue={user.registered_address.home_number} placeholder={"Numer domu"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info mr-6"} type="number" name='apartmentNumber' min="0" defaultValue={user.registered_address.apartment_number} placeholder={"Numer lokalu"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name="postCode" defaultValue={user.registered_address.postal_code} placeholder={"Kod pocztowy"}/>
                </div>

                <div className={"column is-centered mx-6 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twojej pracy:</p>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Na jakim stanowisku pracujesz?</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='type'  defaultValue={user.workplace.type} placeholder={"Stanowisko"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę firmy w której pracujesz</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='nameWorkplace' defaultValue={user.workplace.name} placeholder={"Nazwa firmy"}/>
                </div>

                <div className={"column is-centered mx-6 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Dane firmy:</p>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście pracujesz?</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='cityWorkplace' defaultValue={user.workplace.address.city} placeholder={"Miasto"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name='streetWorkplace' defaultValue={user.workplace.address.street_name} placeholder={"Ulica"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Nr budynku</p>
                    </div>
                    <input className={"input is-info mr-6"} type="number" name='homeNumberWorkplace' min="0" defaultValue={user.workplace.address.home_number} placeholder={"Numer budynku"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info mr-6"} type="number" name='apartmentNumberWorkplace' min="0" defaultValue={user.workplace.address.apartment_number} placeholder={"Numer lokalu"}/>
                </div>

                <div className={"column is-centered mx-6 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info mr-6"} type="text" name="postCodeWorkplace" defaultValue={user.workplace.address.postal_code} placeholder={"Kod pocztowy"}/>
                </div>

                {alreadySent === false ? <div className={"column is-centered mx-6 is-5 mt-5 mb-6"}>
                    <button className={"button is-success is-large"} type='submit'>Wyślij ankietę</button>
                </div> : null}
            </div>
    </form>
)}

export default PollInputs;
