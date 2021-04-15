import {React} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profile: state.profile.profile
});

const BasicForm = ({user, nextPage, profile, setInput}) => (
            <div className={"field is-centered"}>
                {Object.keys(profile).length === 0 ? (
                    <div>
                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className="label">Twoje imie:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="name" value={user.name} onChange={(ev) => setInput({...user, name: ev.target.value})} placeholder={"Imie"} />
                        </div>

                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className="label">Twoje nazwisko:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="surname" value={user.surname} onChange={(ev) => setInput({...user, surname: ev.target.value})} placeholder={"Nazwisko"} />
                        </div>

                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className={"label"}>Twój PESEL:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="pesel" value={user.pesel} onChange={(ev) => setInput({...user, pesel: ev.target.value})} placeholder={"PESEL"} />
                        </div>
                    </div>)
                :
                (
                    <div>
                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className="label">Twoje imie:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="name" value={user.name} onChange={(ev) => setInput({...user, surname: ev.target.value})} placeholder={"Imie"} readOnly/>
                        </div>

                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className="label">Twoje nazwisko:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="surname" value={user.surname} onChange={(ev) => setInput({...user, surname: ev.target.value})} placeholder={"Nazwisko"} readOnly/>
                        </div>

                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className={"label"}>Twój PESEL:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="pesel" defauvalueltValue={user.pesel} onChange={(ev) => setInput({...user, pesel: ev.target.value})} placeholder={"PESEL"} readOnly/>
                        </div>
                    </div>
                )}

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest twój kraj pochodzenia:</p>
                    </div>
                    <input className={"input is-info"} type="text" name="nationality" value={user.nationality} onChange={(ev) => setInput({...user, nationality: ev.target.value})} placeholder={"Kraj pochodzenia"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy jesteś niepełnosprawny?</p>
                    </div>
                    <div className={"checkbox"}>
                        <input className={"checkbox is-primary"} type="checkbox" name='disability' checked={user.disability} onChange={(ev) => setInput({...user, disability: ev.target.value})}/> Tak
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Data Twoich urodzin:</p>
                    </div>
                    <input className={"input is-info"} type="date" name='date' value={user.date_of_birth} onChange={(ev) => setInput({...user, date_of_birth: ev.target.value})} placeholder={"YYYY-MM-DD"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Płeć</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='sex' value={user.sex} onChange={(ev) => setInput({...user, sex: ev.target.value})}>
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
                    <input className={"input is-info"} type="text" name='confession' value={user.confession} onChange={(ev) => setInput({...user, confession: ev.target.value})} placeholder={"Wyznanie"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest Twój stan cywilny?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='marital' value={user.marital_status} onChange={(ev) => setInput({...user, marital_status: ev.target.value})}>
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
                                    <select name='education' value={user.education} onChange={(ev) => setInput({...user, education: ev.target.value})}>
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

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={nextPage} className={"button is-success is-medium"} value="Nastepna strona"/>
                </div>
            </div>
)

export default connect(mapStateToProps)(BasicForm);
