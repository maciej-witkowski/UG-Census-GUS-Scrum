import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll
});

const AddressForm = ({previousPage, nextPage, dispatch, poll}) => {

    const [voivodeship, setVoivodeship] = useState(poll.address.place.voivodeship);
    const [district, setDistrict] = useState(poll.address.place.district);
    const [community, setCommunity] = useState(poll.address.place.community);
    const [city, setCity] = useState(poll.address.place.city);
    const [street_name, setStreet] = useState(poll.address.street_name);
    const [home_number, setHomeNum] = useState(poll.address.home_number);
    const [apartment_number, setApartment] = useState(poll.address.apartment_number);
    const [postal_code, setPostalCode] = useState(poll.address.postal_code);

    useEffect(() => {
        // console.log(poll);
    }, [poll]);

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
        dispatch(actions.setInfo(info));
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
                    <input  className={"input is-info"} type="number" name='homeNumberHousehold' min="0" value={home_number} placeholder={"Numer domu"}
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
                    <input type="button" onClick={previousPage} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={updatePoll} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>
)
    }
export default connect(mapStateToProps)(AddressForm);
