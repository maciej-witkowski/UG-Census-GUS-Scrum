import {React} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profile: state.profile.profile
});

const WorkplaceForm = ({user, previousPage, profile, deleteUser}) => (
            <div className={"field is-centered"}>

                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twojej pracy:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej branży pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='type'  defaultValue={user.workplace.type} placeholder={"Branża"}/>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Na jakim stanowisku pracujesz?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='jobTitle'  defaultValue={user.workplace.job_title} placeholder={"Stanowisko"}/>
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
                                    <select name='contract' defaultValue={user.workplace.contract}>
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
                    <input type="button" onClick={previousPage} className={"button is-success is-medium"} value="Poprzednia strona"/>
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <button className={"button is-success is-medium"} type='submit'>Wyślij ankietę</button>
                </div>

                {profile.admin_id ? <div className={"column is-centered mx-5 is-5 mb-6"}>
                    <input className={"button is-danger is-medium"} type="button" value="Usuń ankietę" onClick={deleteUser} />
                </div> : null }

            </div>
)

export default connect(mapStateToProps)(WorkplaceForm);
