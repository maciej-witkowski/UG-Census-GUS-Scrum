import {React, useEffect, useState} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll
});

const BasicForm = ({user, nextPage, profile, poll, dispatch, setInput}) => {

    const [nationality, setNationality] = useState(poll.nationality);
    const [disability, setDisability] = useState(poll.disability);
    const [date, setDate] = useState(poll.date_of_birth);
    const [sex, setSex] = useState(poll.sex);
    const [confession, setConfession] = useState(poll.confession);
    const [marital_status, setMaritalStatus] = useState(poll.marital_status);
    const [education, setEducation] = useState(poll.education);
    const [residence, setResidence] = useState(poll.residence);


    useEffect(() => {
        console.log(poll);
    }, [poll]);

    const updatePoll = () => {
        const info = {
            nationality: nationality,
            disability: disability,
            date_of_birth: date,
            sex: sex,
            confession: confession,
            marital_status: marital_status,
            education: education,
            residence: residence
        }

        dispatch(actions.setInfo(info));
        nextPage();
    }

    return (
            <div className={"box m-6 field is-centered"}>
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
                            <input className={"input is-info"} type="text" name="name" value={poll.name} placeholder={"Imie"} readOnly/>
                        </div>

                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className="label">Twoje nazwisko:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="surname" value={poll.surname} placeholder={"Nazwisko"} readOnly/>
                        </div>

                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className={"label"}>Twój PESEL:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="pesel" value={poll.pesel} placeholder={"PESEL"} readOnly/>
                        </div>
                    </div>
                )}

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest twój kraj pochodzenia:</p>
                    </div>
                    <input className={"input is-info"} type="text" name="nationality" value={nationality} onChange={(ev) => setNationality(ev.target.value)} placeholder={"Kraj pochodzenia"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy mieszkasz w polsce tymczasowo?</p>
                    </div>
                    <div className={"checkbox"}>
                        <input className={"checkbox is-primary"} type="checkbox" name='residence' checked={residence === "Tymczasowy meldunek" ? true : false} onChange={(ev) => setResidence(ev.target.checked === true ? "Tymczasowy meldunek" : "Stały meldunek")}/> Tak
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy jesteś niepełnosprawny?</p>
                    </div>
                    <div className={"checkbox"}>
                        <input className={"checkbox is-primary"} type="checkbox" name='disability' checked={disability} onChange={() => setDisability(!disability)}/> Tak
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Data Twoich urodzin:</p>
                    </div>
                    <input className={"input is-info"} type="date" name='date' value={date} onChange={(ev) => setDate(ev.target.value)} placeholder={"YYYY-MM-DD"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Płeć</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='sex' value={sex} onChange={(ev) => setSex(ev.target.value)}>
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
                    <input className={"input is-info"} type="text" name='confession' value={confession} onChange={(ev) => setConfession(ev.target.value)} placeholder={"Wyznanie"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Jaki jest Twój stan cywilny?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='marital' value={marital_status} onChange={(ev) => setMaritalStatus(ev.target.value)}>
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
                                    <select name='education' value={education} onChange={(ev) => setEducation(ev.target.value)}>
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
                    <input type="button" onClick={updatePoll} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>)
}

export default connect(mapStateToProps)(BasicForm);
