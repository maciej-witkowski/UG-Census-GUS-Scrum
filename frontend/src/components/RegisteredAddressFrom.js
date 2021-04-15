import {React} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profile: state.profile.profile
});

const RegistrationAddressForm = ({user, previousPage, nextPage}) => (
            <div className={"field is-centered"}>
                
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
                
                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previousPage} className={"button is-success is-medium"} value="Poprzednia strona"/>
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={nextPage} className={"button is-success is-medium"} value="Nastepna strona"/>
                </div>
            </div>
)

export default connect(mapStateToProps)(RegistrationAddressForm);
