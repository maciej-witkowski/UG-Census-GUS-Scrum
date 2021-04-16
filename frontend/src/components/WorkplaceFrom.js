import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll,
    polls: state.polls.polls
});


const WorkplaceForm = ({polls, previousPage, profile, poll, dispatch, deleteUser, resetNum}) => {

    const [type, setType] = useState(poll.workplace.type);
    const [name, setName] = useState(poll.workplace.name);
    const [jobTitle, setJobTitle] = useState(poll.workplace.job_title);
    const [contract, setContract] = useState(poll.workplace.contract);
    const [brutto, setBrutto] = useState(poll.workplace.monthly_earnings.brutto);
    const [netto, setNetto] = useState(poll.workplace.monthly_earnings.netto);
    

    const [voivodeship, setVoivodeship] = useState(poll.workplace.address.place.voivodeship);
    const [district, setDistrict] = useState(poll.workplace.address.place.district);
    const [community, setCommunity] = useState(poll.workplace.address.place.community);
    const [city, setCity] = useState(poll.workplace.address.place.city);

    const [street_name, setStreet] = useState(poll.workplace.address.street_name);
    const [home_number, setHomeNum] = useState(poll.workplace.address.home_number);
    const [apartment_number, setApartment] = useState(poll.workplace.address.apartment_number);
    const [postal_code, setPostalCode] = useState(poll.workplace.address.postal_code);

    const [readyToGetPollByPesel, setReadyToGetPollByPesel] = useState(false);
    const [readyToCheckIfSuccess, setReadyToCheckIfSuccess] = useState(false);

    useEffect(() => {
        dispatch(actions.getPolls());
    }, []);

    const sendInfo = () => {
        const readyInfo = {
            ...poll,
            complition_date: poll.complition_date === "" ? new Date() : poll.complition_date,
            last_modified_date: new Date(),
        }

        dispatch(actions.sendPolls(readyInfo));
    }


    useEffect(() => {
        // console.log(poll);
    }, [poll]);


    useEffect(() => {
        if (readyToGetPollByPesel) {
            let foundUser;
            foundUser = polls.filter(user => user.pesel === poll.pesel);
            if (!foundUser[0]) {
                setReadyToCheckIfSuccess(true);
            } else {
                setReadyToCheckIfSuccess(false);
                setReadyToGetPollByPesel(false);
                alert(`Poll for this pesel already exists!`);
            }
        }
    }, [readyToGetPollByPesel]);

    useEffect(() => {
        if (readyToCheckIfSuccess) {
            sendInfo();
            setReadyToCheckIfSuccess(false);
            setReadyToGetPollByPesel(false);
            alert(`Poll successfully sent!`)
            resetNum()
        }
    }, [readyToCheckIfSuccess]);

    const updatePoll = () => {
        const info = {
            workplace: {
                type: type,
                name: name,
                contract: contract,
                job_title: jobTitle,
                address: {
                    place: {
                        voivodeship: voivodeship,
                        district: district,
                        community: community,
                        city: city
                    },
                    street_name: street_name,
                    home_number: home_number,
                    apartment_number: apartment_number,
                    postal_code: postal_code
                },
                monthly_earnings: {
                    brutto: brutto,
                    netto: netto
                }
            }
        }
        dispatch(actions.getPolls());
        dispatch(actions.setInfo(info));
        setReadyToGetPollByPesel(true);
    }

    const changePage = () => {
        const info = {
            workplace: {
                type: type,
                name: name,
                contract: contract,
                job_title: jobTitle,
                address: {
                    place: {
                        voivodeship: voivodeship,
                        district: district,
                        community: community,
                        city: city
                    },
                    street_name: street_name,
                    home_number: home_number,
                    apartment_number: apartment_number,
                    postal_code: postal_code
                },
                monthly_earnings: {
                    brutto: brutto,
                    netto: netto
                }
            }
        }
        dispatch(actions.setInfo(info));
        previousPage()
    }


    return (

            <div className={"field is-centered"}>

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twojej pracy:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy jesteś bezrobotny?</p>
                    </div>
                    <div className={"checkbox"}>
                        <input className={"checkbox is-primary"} type="checkbox" name='unemployment' checked={type === "bezrobotny" ? true : false} 
                        onChange={(ev) => {
                            setType(ev.target.checked === true ? "bezrobotny" : "");
                            if(type !== "bezrobotny"){
                                setName("")
                                setContract("")
                                setJobTitle("")
                                setVoivodeship("")
                                setDistrict("")
                                setCommunity("")
                                setCity("")
                                setStreet("")
                                setHomeNum(0)
                                setApartment(0)
                                setPostalCode("")
                                setBrutto(0)
                                setNetto(0)
                            }}}/> Tak
                    </div>
                </div>

                <fieldset disabled={type === "bezrobotny" ? "disabled" : ""}>
                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakiej branży pracujesz?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='type'  value={type} placeholder={"Branża"}
                        onChange={(ev) => setType(ev.target.value)}/>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Na jakim stanowisku pracujesz?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='job_title' value={jobTitle} placeholder={"Stanowisko"}
                        onChange={(ev) => setJobTitle(ev.target.value)}/>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Podaj nazwę firmy w której pracujesz</p>
                        </div>
                        <input className={"input is-info"} type="text" name='nameWorkplace' value={name} placeholder={"Nazwa firmy"}
                        onChange={(ev) => setName(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 mt-6"}>
                        <p className={"subtitle has-text-danger-dark"}>Dane firmy:</p>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim województwie pracujesz?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='voivodeshipWorkplace' value={voivodeship} placeholder={"Województwo"}
                        onChange={(ev) => setVoivodeship(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim powiacie pracujesz?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='districtWorkplace' value={district} placeholder={"Powiat"}
                        onChange={(ev) => setDistrict(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakiej gminie pracujesz?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='communityWorkplace' value={community} placeholder={"Gmina"}
                        onChange={(ev) => setCommunity(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>W jakim mieście pracujesz?</p>
                        </div>
                        <input className={"input is-info"} type="text" name='cityWorkplace' value={city} placeholder={"Miasto"}
                        onChange={(ev) => setCity(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Podaj nazwę ulicy</p>
                        </div>
                        <input className={"input is-info"} type="text" name='streetWorkplace' value={street_name} placeholder={"Ulica"}
                        onChange={(ev) => setStreet(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Nr budynku</p>
                        </div>
                        <input className={"input is-info"} type="number" name='homeNumberWorkplace' min="0" value={home_number} placeholder={"Numer budynku"}
                        onChange={(ev) => setHomeNum(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Nr lokalu</p>
                        </div>
                        <input className={"input is-info"} type="number" name='apartmentNumberWorkplace' min="0" value={apartment_number} placeholder={"Numer lokalu"}
                        onChange={(ev) => setApartment(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Kod pocztowy</p>
                        </div>
                        <input className={"input is-info"} type="text" name="postCodeWorkplace" value={postal_code} placeholder={"Kod pocztowy"}
                        onChange={(ev) => setPostalCode(ev.target.value)}
                        />
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Jaki jest twój rodzaj umowy?</p>
                        </div>
                        <div className={"control is-5"}>
                            <div className="field-body">
                                <div className="field is-narrow">
                                    <div className="select">
                                        <select name='contract' value={contract} onChange={(ev) => setContract(ev.target.value)}>
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
                        <input className={"input is-info"} type="text" name="brutto" value={brutto} placeholder={"Brutto"} 
                        onChange={(ev) => setBrutto(ev.target.value)}/>
                    </div>

                    <div className={"column is-centered mx-5 is-5"}>
                        <input className={"input is-info"} type="text" name="netto" value={netto} placeholder={"Netto"} 
                        onChange={(ev) => setNetto(ev.target.value)}/>
                    </div>
                </fieldset>
{/* 
                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <button className={"button is-success is-medium"} onClick={updatePoll}>Update Poll</button>
                </div> */}

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={changePage} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={updatePoll} className={"button is-success is-medium"} value="Wyślij ankietę"/>
                </div>

                {profile.admin_id ? <div className={"column is-centered mx-5 is-5 mb-6"}>
                    <input className={"button is-danger is-medium"} type="button" value="Usuń ankietę" onClick={deleteUser} />
                </div> : null }

            </div>)
}

export default connect(mapStateToProps)(WorkplaceForm);
