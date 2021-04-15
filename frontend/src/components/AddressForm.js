import {React} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profile: state.profile.profile
});

const AddressForm = ({user, previousPage, nextPage}) => (
            <div className={"field is-centered"}>

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

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previousPage} className={"button is-success is-medium"} value="Poprzednia strona"/>
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={nextPage} className={"button is-success is-medium"} value="Nastepna strona"/>
                </div>
                
            </div>
)

export default connect(mapStateToProps)(AddressForm);
