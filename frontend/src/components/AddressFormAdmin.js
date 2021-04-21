import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    user: state.user.user
});

const AddressFormAdmin = ({previousPage, nextPage, dispatch, user}) => {

    const [voivodeship, setVoivodeship] = useState(user.address.place.voivodeship);
    const [district, setDistrict] = useState(user.address.place.district);
    const [community, setCommunity] = useState(user.address.place.community);
    const [city, setCity] = useState(user.address.place.city);
    const [street_name, setStreet] = useState(user.address.street_name);
    const [home_number, setHomeNum] = useState(user.address.home_number);
    const [apartment_number, setApartment] = useState(user.address.apartment_number);
    const [postal_code, setPostalCode] = useState(user.address.postal_code);

    useEffect(() => {
        // console.log(user);
    }, [user]);

    const updatePoll = () => {
        const info = {
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
            }
        }
        dispatch(actions.setInfoAdmin(info));
    }

    const previous = () => {
        updatePoll();
        previousPage();
    }

    const next = () => {
        updatePoll();
        nextPage();
    }

    return(
            <div className={"box m-6 field is-centered"}>

                 <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim adresie zamieszkania w dzieciństwie:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim województwie mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='voivodeshipHousehold' value={voivodeship} placeholder={"Województwo"}
                    onChange={(ev) => setVoivodeship(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim powiacie mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='districtHousehold' value={district} placeholder={"Powiat"}
                    onChange={(ev) => setDistrict(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej gminie mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='communityHousehold' value={community} placeholder={"Gmina"}
                    onChange={(ev) => setCommunity(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście mieszkałeś/aś?</p>
                    </div>
                    <input className={"input is-info"} type="text" name='cityHousehold' value={city} placeholder={"Miasto"}
                    onChange={(ev) => setCity(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy:</p>
                    </div>
                    <input  className={"input is-info"} type="text" name='streetHousehold' value={street_name} placeholder={"Ulica"}
                    onChange={(ev) => setStreet(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr domu</p>
                    </div>
                    <input  className={"input is-info"} type="text" name='homeNumberHousehold' value={home_number} placeholder={"Numer domu"}
                    onChange={(ev) => setHomeNum(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    <input className={"input is-info"} type="number" name='apartmentNumberHousehold' min="0" value={apartment_number} placeholder={"Numer lokalu"}
                    onChange={(ev) => setApartment(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    <input className={"input is-info"} type="text" name="postCodeHousehold" value={postal_code} placeholder={"Kod pocztowy"}
                    onChange={(ev) => setPostalCode(ev.target.value)}
                    />
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previous} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={next} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>
)
    }
export default connect(mapStateToProps)(AddressFormAdmin);
