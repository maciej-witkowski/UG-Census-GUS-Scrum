import {React, useEffect, useState} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";
import axios from 'axios';


const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll
});

const BasicForm = ({nextPage, profile, poll, dispatch}) => {

    const [nationality, setNationality] = useState(poll.nationality);
    const [date, setDate] = useState(poll.date_of_birth);
    const [sex, setSex] = useState(poll.sex);
    const [confession, setConfession] = useState(poll.confession);
    const [marital_status, setMaritalStatus] = useState(poll.marital_status);
    const [education, setEducation] = useState(poll.education);

    const [residenceType, setResidenceType] = useState(poll.residence.type);
    const [residenceFrom, setResidenceFrom] = useState(poll.residence.period.from);
    const [residenceTill, setResidenceTill] = useState(poll.residence.period.till);

    const [disabilityExists, setDisabilityExists] = useState(poll.disability.exists);
    const [disabilityDegree, setDisabilityDegree] = useState(poll.disability.degree);


    const [name, setName] = useState(poll.name);
    const [surname, setSurname] = useState(poll.surname);
    const [pesel, setPesel] = useState(poll.pesel);

    const [buttonClicked, setButtonClicked] = useState(false);

    const [nations, setNations] = useState([])

    const [errors, setErrors] = useState({
        nameError: "",
        surnameError: "",
        peselError: "",
        dateError: "",
        sexError: "",
        confessionError: "",
        marital_statusError: "",
        educationError: "",
        residenceTypeError: "",
        residenceFromError: "",
        residenceTillError: "",
        disabilityExistsError: "",
        disabilityDegreeError: ""
    });

    useEffect(() => {
        console.log(poll);
    }, [poll]);

    useEffect(() => {
        if (disabilityExists) {
            setDisabilityDegree('Lekki');  // set default value
        }
    }, [disabilityExists]);


    const updatePoll = async () => {
        const patternPesel = /^[0-9]{11}$/
        let res;

        if (residenceType === "Tymczasowy meldunek") {
            res = {
                type: residenceType,
                period: {
                    from: residenceFrom,
                    till: residenceTill
                }
            }
        } else {
            res = {
                type: residenceType,
                period: {
                    from: "",
                    till: ""
                }
            }
        }

        let disability;

        if (disabilityExists) {
            disability = {
                exists: disabilityExists,
                degree: disabilityDegree
            }
        } else {
            disability = {
                exists: false,
                degree: ""
            }
        }

        const info = {
            name: name,
            surname: surname,
            pesel: pesel,
            nationality: nationality,
            disability: disability,
            date_of_birth: date,
            sex: sex,
            confession: confession,
            marital_status: marital_status,
            education: education,
            residence: res
        }
        dispatch(actions.setInfo(info));

        const errorCheck = {
            nameError: "",
            surnameError: "",
            peselError: "",
            dateError: "",
            sexError: "",
            confessionError: "",
            marital_statusError: "",
            educationError: "",
            residenceFromError: "",
            residenceTillError: "",
        }

        if (name) {
            errorCheck.nameError = ""
        } else {
            errorCheck.nameError = "Imię jest obowiązkowe!"
        }

        if (surname) {
            errorCheck.surnameError = ""
        } else {
            errorCheck.surnameError = "Nazwisko jest obowiązkowe!"
        }

        if (pesel) {
            errorCheck.peselError = ""
        } else {
            errorCheck.peselError = "PESEL jest obowiązkowy!"
        }

        if (date) {
            errorCheck.dateError = ""
        } else {
            errorCheck.dateError = "Data urodzenia jest obowiązkowa!"
        }

        if (!errorCheck.peselError && !errorCheck.dateError) {
            if (await checkPeselValidAndDisplayAlerts()) {
                errorCheck.peselError = ""
                errorCheck.dateError = ""
                errorCheck.sexError = ""
            } else {
                errorCheck.peselError = "Podany numer PESEL nie pasuje do daty urodzenia oraz wybranej płci!"
                errorCheck.dateError = "Podana data urodzenia nie zgadza się z numerem PESEL"
                errorCheck.sexError = "Podana płeć nie zgadza się z numerem PESEL"
            }
        }

        if (residenceType === "Tymczasowy meldunek") {
            if (residenceFrom) {
                errorCheck.residenceFromError = ""
            } else {
                errorCheck.residenceFromError = "Data rozpoczęcia pobytu jest obowiązkowa!"
            }

            if (residenceTill) {
                errorCheck.residenceTillError = ""
            } else {
                errorCheck.residenceTillError = "Data zakończenia pobytu jest obowiązkowa!"
            }
        } else {
            errorCheck.residenceFromError = ""
            errorCheck.residenceTillError = ""
        }

        setErrors(errorCheck);
        setButtonClicked(true);
    }

    // const checkPeselValidAndDisplayAlerts = () => {
    //     axios.post(`http://localhost:3000/polls/pesel`, {pesel: pesel, date_of_birth: date, sex: sex}).then(res => {
    //         console.log(res.data);
    //         if (res.data.success===true) {
    //             nextPage();
    //             setButtonClicked(false);
    //         }
    //         else {
    //             alert(`Podany pesel jest niezgodny z płcią lub datą urodzenia`);
    //             setButtonClicked(false);
    //         }
    //     }).catch(err => console.log(err))
    // }

    const checkPeselValidAndDisplayAlerts = async () => {
        return await axios.post(`http://localhost:3000/polls/pesel`, {
            pesel: pesel,
            date_of_birth: date,
            sex: sex
        }).then(res => {
            return res.data.success;
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        if (buttonClicked) {
            if (Object.values(errors).every(x => x === '')) {
                nextPage()
            } else {
                setButtonClicked(false);
                alert("Nie wszystkie pola zostały wypełnione!")
            }
        }

    }, [buttonClicked])

    // useEffect(() => {
    //     if (buttonClicked) {
    //         checkPeselValidAndDisplayAlerts();
    //     }
    //
    // }, [buttonClicked])

    useEffect(() => {
        axios.get(`http://localhost:3000/data/nations`)
            .then(res => {
                res.data.countries.sort()
                setNations(res.data.countries);
            })
            .catch(err => console.log(err))
    })

    return (
            <div className={"box m-6 field is-centered"}>
                <fieldset disabled={poll.filled ? "disabled" : ""}>
                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className="label">Twoje imie:</p>
                        </div>
                        <input className={"input is-info"} type="text" name="name" value={name} onChange={(ev) => setName(ev.target.value)} placeholder={"Imie"} />
                        <li>
                            <p style={{minHeight: "1rem", color: "red"}}>{errors.nameError ? errors.nameError : ""}</p>
                        </li>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className="label">Twoje nazwisko:</p>
                        </div>
                        <input className={"input is-info"} type="text" name="surname" value={surname} onChange={(ev) => setSurname(ev.target.value)} placeholder={"Nazwisko"} />
                        <li>
                            <p style={{minHeight: "1rem", color: "red"}}>{errors.surnameError ? errors.surnameError : ""}</p>
                        </li>
                    </div>
                    {Object.keys(profile).length === 0 ? (
                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className={"label"}>Twój PESEL:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="pesel" value={pesel} onChange={(ev) => setPesel(ev.target.value)} placeholder={"PESEL"}/>
                            <li>
                                <p style={{minHeight: "1rem", color: "red"}}>{errors.peselError ? errors.peselError : ""}</p>
                            </li>
                        </div>
                    )
                    :
                    (
                        <div className={"column is-centered mx-5 is-5"}>
                            <div>
                                <p className={"label"}>Twój PESEL:</p>
                            </div>
                            <input className={"input is-info"} type="text" name="pesel" value={pesel} onChange={(ev) => setPesel(ev.target.value)} placeholder={"PESEL"} readOnly/>
                            <li>
                                <p style={{minHeight: "1rem", color: "red"}}>{errors.peselError ? errors.peselError : ""}</p>
                            </li>
                        </div>
                    )}

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Jaki jest twój kraj pochodzenia:</p>
                        </div>
                        {/*<input className={"input is-info"} type="text" name="nationality" value={nationality} onChange={(ev) => setNationality(ev.target.value)} placeholder={"Kraj pochodzenia"}/>*/}
                        <div className={"control is-5"}>
                            <div className="field-body">
                                <div className="field is-narrow">
                                    <div className="select">
                                        <select name='nationality' value={nationality} onChange={(ev) => setNationality(ev.target.value)}>
                                            {nations.map((nation, index) => {
                                                return <option key={index} value={nation}>{nation}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Czy mieszkasz w polsce tymczasowo?</p>
                        </div>
                        <div className={"checkbox"}>
                            <input className={"checkbox is-primary"} type="checkbox" name='residenceType' checked={residenceType === "Tymczasowy meldunek" ? true : false} onChange={(ev) => setResidenceType(ev.target.checked === true ? "Tymczasowy meldunek" : "Stały meldunek")}/> Tak
                        </div>
                    </div>

                    {residenceType === "Tymczasowy meldunek" ? (<div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Od kiedy?</p>
                        </div>
                        <input className={"input is-info"} type="date" name='residenceFrom' value={residenceFrom} onChange={(ev) => setResidenceFrom(ev.target.value)} placeholder={"YYYY-MM-DD"}/>
                        <li>
                            <p style={{minHeight: "1rem", color: "red"}}>{errors.residenceFromError ? errors.residenceFromError : ""}</p>
                        </li>
                        <div>
                            <p className={"label"}>Do kiedy?</p>
                        </div>
                        <input className={"input is-info"} type="date" name='residenceTill' value={residenceTill} onChange={(ev) => setResidenceTill(ev.target.value)} placeholder={"YYYY-MM-DD"}/>
                        <li>
                            <p style={{minHeight: "1rem", color: "red"}}>{errors.residenceTillError ? errors.residenceTillError : ""}</p>
                        </li>
                    </div>): null}

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Czy jesteś niepełnosprawny?</p>
                        </div>
                        <div className={"checkbox"}>
                            <input className={"checkbox is-primary"} type="checkbox" name='disabilityExists' checked={disabilityExists} onChange={() => setDisabilityExists(!disabilityExists)}/> Tak
                        </div>
                    </div>


                    {disabilityExists? (<div className={"column is-centered mx-5 is-5"}> 
                        <div>
                            <p className={"label"}>Stopień: </p>
                        </div>
                    <div className={"control is-5"}>
                            <div className="field-body">
                                <div className="field is-narrow">
                                    <div className="select">
                                        <select name='disabilityDegree' value={disabilityDegree} onChange={(ev) => setDisabilityDegree(ev.target.value)}>
                                            <option value='Lekki'>Lekki</option>
                                            <option value='Umiarkowany'>Umiarkowany</option>
                                            <option value='Znaczny'>Znaczny</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>): null}

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Data Twoich urodzin:</p>
                        </div>
                        <input className={"input is-info"} type="date" name='date' value={date} onChange={(ev) => setDate(ev.target.value)} placeholder={"YYYY-MM-DD"}/>
                        <li>
                            <p style={{minHeight: "1rem", color: "red"}}>{errors.dateError ? errors.dateError : ""}</p>
                        </li>
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
                                            <option value='Wolę nie odpowiadać'>Wole nie odpowiadać</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <li>
                            <p style={{minHeight: "1rem", color: "red"}}>{errors.sexError ? errors.sexError : ""}</p>
                        </li>
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
                                            <option value='Wolny'>Wolny</option>
                                            <option value='Wolna'>Wolna</option>
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
                </fieldset>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={updatePoll} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>)
}

export default connect(mapStateToProps)(BasicForm);
