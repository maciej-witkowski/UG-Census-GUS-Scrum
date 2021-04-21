import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    profile: state.profile.profile,
    user: state.user.user,
});


const WorkplaceFormAdmin = ({previousPage, profile, user, dispatch, deleteUser, nextPage, resetNum}) => {

    const [type, setType] = useState(user.workplace.type);
    const [name, setName] = useState(user.workplace.name);
    const [jobTitle, setJobTitle] = useState(user.workplace.job_title);
    const [contract, setContract] = useState(user.workplace.contract);
    const [brutto, setBrutto] = useState(user.workplace.monthly_earnings.brutto);
    const [netto, setNetto] = useState(user.workplace.monthly_earnings.netto);
    

    const [voivodeship, setVoivodeship] = useState(user.workplace.address.place.voivodeship);
    const [district, setDistrict] = useState(user.workplace.address.place.district);
    const [community, setCommunity] = useState(user.workplace.address.place.community);
    const [city, setCity] = useState(user.workplace.address.place.city);

    const [street_name, setStreet] = useState(user.workplace.address.street_name);
    const [home_number, setHomeNum] = useState(user.workplace.address.home_number);
    const [apartment_number, setApartment] = useState(user.workplace.address.apartment_number);
    const [postal_code, setPostalCode] = useState(user.workplace.address.postal_code);

    useEffect(() => {
        console.log(user);
        console.log('user was updated');

    }, [user]);

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
        
         dispatch(actions.setInfoAdmin(info)); // update redux poll 
    }

    const previous = () => {
        updatePoll();
        previousPage();
    }

    const next = () => {
        updatePoll();
        nextPage();
    }

    return (
        <div className={"box m-6 field is-centered"}>
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
                            }}/> Tak
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
                        <input className={"input is-info"} type="text" name='homeNumberWorkplace' value={home_number} placeholder={"Numer budynku"}
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
                                            <option value='Umowa o pracę'>Umowa o pracę</option>
                                            <option value='Umowa zlecenie'>Umowa zlecenie</option>
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

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previous} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    {profile.admin_id ? 
                    <input className={"button is-danger is-medium"} type="button" value="Usuń ankietę" onClick={deleteUser} />
                    : null }
                    <input type="button" onClick={next} className={"button is-success is-medium"} value="Podsumowanie"/>
                </div>

            </div>
        </div>)
}

export default connect(mapStateToProps)(WorkplaceFormAdmin);
