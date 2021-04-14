import {React} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profile: state.profile.profile
});

const PollInputs = ({sendInfo, read, user, deleteUser, profile}) => (
    <form className={"box m-4"} onSubmit={sendInfo}>
        {/* <fieldset disabled={!read ? "disabled" : ""}> */}
            <div className={"field is-centered"}>
                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className="label">Twoje imie:</p>
                    </div>
                    <input className={"input is-info"} type="text" name="name" defaultValue={user.name} placeholder={"Imie"} readOnly/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className="label">Twoje nazwisko:</p>
                    </div>
                    <input className={"input is-info"} type="text" name="surname" defaultValue={user.surname} placeholder={"Nazwisko"} readOnly/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Twój PESEL:</p>
                    </div>
                    <input className={"input is-info"} type="text" name="pesel" defaultValue={user.pesel} placeholder={"PESEL"} readOnly/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest twój kraj pochodzenia:</p>
                    </div>
                    <input className={"input is-info"} type="text" name="nationality" defaultValue={user.nationality} placeholder={"Kraj pochodzenia"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy jesteś niepełnosprawny?</p>
                    </div>
                    <div className={"checkbox"}>
                        <input className={"checkbox is-primary"} type="checkbox" name='disability' defaultChecked={user.disability}/> Tak
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Data Twoich urodzin:</p>
                    </div>
                    <input className={"input is-info"} type="date" name='date' defaultValue={user.date_of_birth} placeholder={"YYYY-MM-DD"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
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

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jakie jest twoje wyznanie?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='confession' defaultValue={user.confession} placeholder={"Wyznanie"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
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

                <div className={"column is-centered mx-5 is-5"}>
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

                <div className={"column is-centered mx-5 is-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim gospodarstwie domowym:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
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

                <div className={"column is-centered mx-5 is-5"}>
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


                <div className={"column is-centered mx-5 is-5"}>
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

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim adresie zamieszkania w dzieciństwie:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim województwie mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='voivodeshipHousehold' defaultValue={user.address.place.voivodeship} placeholder={"Województwo"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim powiacie mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='districtHousehold' defaultValue={user.address.place.district} placeholder={"Powiat"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej gminie mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='communityHousehold' defaultValue={user.address.place.community} placeholder={"Gmina"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='cityHousehold' defaultValue={user.address.place.city} placeholder={"Miasto"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy:</p>
                    </div>
                    <input  className={"input is-info"} type="text" name='streetHousehold' defaultValue={user.address.street_name} placeholder={"Ulica"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr domu</p>
                    </div>
                    <input  className={"input is-info"} type="number" name='homeNumberHousehold' min="0" defaultValue={user.address.home_number} placeholder={"Numer domu"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info"} type="number" name='apartmentNumberHousehold' min="0" defaultValue={user.address.apartment_number} placeholder={"Numer lokalu"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info"} type="text" name="postCodeHousehold" defaultValue={user.address.postal_code} placeholder={"Kod pocztowy"}/>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim obecnym adresie zamieszkania:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim województwie mieszkasz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='voivodeship' defaultValue={user.registered_address.place.voivodeship} placeholder={"Województwo"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim powiacie mieszkasz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='district' defaultValue={user.registered_address.place.district} placeholder={"Powiat"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej gminie mieszkasz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='community' defaultValue={user.registered_address.place.community} placeholder={"Gmina"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście mieszkasz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='city' defaultValue={user.registered_address.place.city} placeholder={"Miasto"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy</p>
                    </div>
                    <input className={"input is-info"} type="text" name='street' defaultValue={user.registered_address.street_name} placeholder={"Ulica"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr domu</p>
                    </div>
                    <input className={"input is-info"} type="number" name='homeNumber' min="0" defaultValue={user.registered_address.home_number} placeholder={"Numer domu"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info"} type="number" name='apartmentNumber' min="0" defaultValue={user.registered_address.apartment_number} placeholder={"Numer lokalu"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info"} type="text" name="postCode" defaultValue={user.registered_address.postal_code} placeholder={"Kod pocztowy"}/>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twojej pracy:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Na jakim stanowisku pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='type'  defaultValue={user.workplace.type} placeholder={"Stanowisko"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę firmy w której pracujesz</p>
                    </div>
                    <input className={"input is-info"} type="text" name='nameWorkplace' defaultValue={user.workplace.name} placeholder={"Nazwa firmy"}/>
                </div>

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Dane firmy:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim województwie pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='voivodeshipWorkplace' defaultValue={user.workplace.address.place.voivodeship} placeholder={"Województwo"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim powiacie pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='districtWorkplace' defaultValue={user.workplace.address.place.district} placeholder={"Powiat"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej gminie pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='communityWorkplace' defaultValue={user.workplace.address.place.community} placeholder={"Gmina"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='cityWorkplace' defaultValue={user.workplace.address.place.city} placeholder={"Miasto"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy</p>
                    </div>
                    <input className={"input is-info"} type="text" name='streetWorkplace' defaultValue={user.workplace.address.street_name} placeholder={"Ulica"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr budynku</p>
                    </div>
                    <input className={"input is-info"} type="number" name='homeNumberWorkplace' min="0" defaultValue={user.workplace.address.home_number} placeholder={"Numer budynku"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info"} type="number" name='apartmentNumberWorkplace' min="0" defaultValue={user.workplace.address.apartment_number} placeholder={"Numer lokalu"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info"} type="text" name="postCodeWorkplace" defaultValue={user.workplace.address.postal_code} placeholder={"Kod pocztowy"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest twój rodzaj umowy?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='jobTitle' defaultValue={user.workplace.job_title}>
                                        <option value='B2B'>B2B</option>
                                        <option value='employment_contract'>Umowa o pracę</option>
                                        <option value='contract_of_mandate'>Umowa zlecenie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jakie jest twoje wynagrodzenie?</p>
                    </div>
                    <input className={"input is-info"} type="text" name="brutto" defaultValue={user.workplace.brutto} placeholder={"Brutto"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <input className={"input is-info"} type="text" name="netto" defaultValue={user.workplace.netto} placeholder={"Netto"}/>
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <button className={"button is-success is-medium"} type='submit'>Wyślij ankietę</button>
                </div>

                {profile.admin_id ? <div className={"column is-centered mx-5 is-5 mb-6"}>
                    <input className={"button is-danger is-medium"} type="button" value="Usuń ankietę" onClick={deleteUser} />
                </div> : null }

            </div>
        {/* </fieldset> */}
    </form>
)

export default connect(mapStateToProps)(PollInputs);
