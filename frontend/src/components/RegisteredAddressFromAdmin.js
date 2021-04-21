import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    user: state.user.user
});

const RegistrationAddressFormAdmin = ({previousPage, user, dispatch, nextPage}) => {

    const [voivodeship, setVoivodeship] = useState(user.registered_address.place.voivodeship);
    const [district, setDistrict] = useState(user.registered_address.place.district);
    const [community, setCommunity] = useState(user.registered_address.place.community);
    const [city, setCity] = useState(user.registered_address.place.city);
    const [street_name, setStreet] = useState(user.registered_address.street_name);
    const [home_number, setHomeNum] = useState(user.registered_address.home_number);
    const [apartment_number, setApartment] = useState(user.registered_address.apartment_number);
    const [postal_code, setPostalCode] = useState(user.registered_address.postal_code);

    const [same, setSame] = useState(user.registered_address.same);

    useEffect(() => {
        console.log(user);
    }, [user]);

    useEffect(() => {
        if (same) {
            setVoivodeship(user.address.place.voivodeship);
            setDistrict(user.address.place.district);
            setCommunity(user.address.place.community);
            setCity(user.address.place.city);
            setStreet(user.address.street_name);
            setHomeNum(user.address.home_number);
            setApartment(user.address.apartment_number);
            setPostalCode(user.address.postal_code);
        }
        else {
            setVoivodeship(user.registered_address.place.voivodeship);
            setDistrict(user.registered_address.place.district);
            setCommunity(user.registered_address.place.community);
            setCity(user.registered_address.place.city);
            setStreet(user.registered_address.street_name);
            setHomeNum(user.registered_address.home_number);
            setApartment(user.registered_address.apartment_number);
            setPostalCode(user.registered_address.postal_code);
        }
    }, [same]);

    const updatePoll = () => {
        const info = {
            registered_address: {
                same: same,
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

    return (
            <div className={"box m-6 field is-centered"}>

                
                <div className={"column is-centered mx-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim obecnym adresie zamieszkania:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Taki sam jak adres z dzieciństwa</p>
                    </div>
                    <div className={"checkbox"}>
                        <input className={"checkbox is-primary"} type="checkbox" name='same' checked={same} onChange={() => setSame(!same)}/>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim województwie mieszkasz?</p>
                    </div>
                    {same?
                    (<input disabled className={"input is-info"} type="text" name='voivodeshipHousehold' value={voivodeship} placeholder={"Województwo"}
                    onChange={(ev) => setVoivodeship(ev.target.value)}
                    />):
                    (<input className={"input is-info"} type="text" name='voivodeshipHousehold' value={voivodeship} placeholder={"Województwo"}
                    onChange={(ev) => setVoivodeship(ev.target.value)}
                    />)}
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim powiacie mieszkasz?</p>
                    </div>
                    {same?
                    (<input disabled className={"input is-info"} type="text" name='districtHousehold' value={district} placeholder={"Powiat"}
                    onChange={(ev) => setDistrict(ev.target.value)}
                    />)
                    :
                    (<input className={"input is-info"} type="text" name='districtHousehold' value={district} placeholder={"Powiat"}
                    onChange={(ev) => setDistrict(ev.target.value)}
                    />)}
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakiej gminie mieszkasz?</p>
                    </div>
                    {same?
                    (<input disabled className={"input is-info"} type="text" name='communityHousehold' value={community} placeholder={"Gmina"}
                    onChange={(ev) => setCommunity(ev.target.value)}
                    />)
                    :
                    (<input className={"input is-info"} type="text" name='communityHousehold' value={community} placeholder={"Gmina"}
                    onChange={(ev) => setCommunity(ev.target.value)}
                    />)}
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>W jakim mieście mieszkasz?</p>
                    </div>
                    {same? 
                    (<input disabled className={"input is-info"} type="text" name='cityHousehold' value={city} placeholder={"Miasto"}
                    onChange={(ev) => setCity(ev.target.value)}
                    />)
                    :
                    (<input className={"input is-info"} type="text" name='cityHousehold' value={city} placeholder={"Miasto"}
                    onChange={(ev) => setCity(ev.target.value)}
                    />)}
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Podaj nazwę ulicy</p>
                    </div>
                    {same? 
                    (<input disabled className={"input is-info"} type="text" name='streetHousehold' value={street_name} placeholder={"Ulica"}
                    onChange={(ev) => setStreet(ev.target.value)}
                    />)
                    :
                    (<input  className={"input is-info"} type="text" name='streetHousehold' value={street_name} placeholder={"Ulica"}
                    onChange={(ev) => setStreet(ev.target.value)}
                    />)} 
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr domu</p>
                    </div>
                    {same? 
                    (<input disabled className={"input is-info"} type="text" name='homeNumberHousehold' value={home_number} placeholder={"Numer domu"}
                    onChange={(ev) => setHomeNum(ev.target.value)}
                    />)
                    :
                    (<input  className={"input is-info"} type="text" name='homeNumberHousehold' value={home_number} placeholder={"Numer domu"}
                    onChange={(ev) => setHomeNum(ev.target.value)}
                    />)}
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Nr lokalu</p>
                    </div>
                    {same? 
                    (<input disabled className={"input is-info"} type="number" name='apartmentNumberHousehold' min="0" value={apartment_number} placeholder={"Numer lokalu"}
                    onChange={(ev) => setApartment(ev.target.value)}
                    />)
                    :
                    (<input className={"input is-info"} type="number" name='apartmentNumberHousehold' min="0" value={apartment_number} placeholder={"Numer lokalu"}
                    onChange={(ev) => setApartment(ev.target.value)}
                    />)}
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Kod pocztowy</p>
                    </div>
                    {same? 
                    (<input disabled className={"input is-info"} type="text" name="postCodeHousehold" value={postal_code} placeholder={"Kod pocztowy"}
                    onChange={(ev) => setPostalCode(ev.target.value)}
                    />):
                    (<input className={"input is-info"} type="text" name="postCodeHousehold" value={postal_code} placeholder={"Kod pocztowy"}
                    onChange={(ev) => setPostalCode(ev.target.value)}
                    />)}
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previous} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={next} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>
)
    }
export default connect(mapStateToProps)(RegistrationAddressFormAdmin);
