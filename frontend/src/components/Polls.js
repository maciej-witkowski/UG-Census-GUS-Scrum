import React from 'react';
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";


const mapStateToProps = state => ({
    poll: state.poll.poll
})


const Polls = ({poll, dispatch}) => {
    const sendInfo = (event) => {
        const {
            name,
            nationality,
            disability,
            date,
            sex,
            confession,
            surname,
            marital,
            education,
            children,
            livingWithParents,
            partner,
            cityHousehold,
            streetHousehold,
            homeNumberHousehold,
            apartmentNumberHousehold,
            postCodeHousehold,
            city,
            street,
            homeNumber,
            apartmentNumber,
            postCode,
            type,
            nameWorkplace,
            cityWorkplace,
            streetWorkplace,
            homeNumberWorkplace,
            apartmentNumberWorkplace,
            postCodeWorkplace,
        } = event.target
    
        const readyInfo = {
            type: "",
            name: name.value,
            nationality: nationality.value,
            disability: disability.checked,
            date_of_birth: date.value,
            sex: sex.value,
            confession: confession.value,
            surname: surname.value,
            marital_status: marital.value,
            education: education.value,
            household: {
                children: children.value === "Tak" ? true : false,
                living_with_parents: livingWithParents.value === "Tak" ? true : false,
                partner: partner.value === "Tak" ? true : false
            },
            address: {
                city: cityHousehold.value,
                street_name: streetHousehold.value,
                home_number: homeNumberHousehold.value,
                apartment_number: apartmentNumberHousehold.value,
                postal_code: postCodeHousehold.value
            },
            registered_address: {
                city: city.value,
                street_name: street.value,
                home_number: homeNumber.value,
                apartment_number: apartmentNumber.value,
                postal_code: postCode.value
            },
            workplace: {
                type: type.value,
                name: nameWorkplace.value,
                address: {
                    city: cityWorkplace.value,
                    street_name: streetWorkplace.value,
                    home_number: homeNumberWorkplace.value,
                    apartment_number: apartmentNumberWorkplace.value,
                    postal_code: postCodeWorkplace.value
                }
            },
            complition_date: poll.complition_date === "" ? new Date() : poll.complition_date,
            last_modified_date: new Date(),
        }
    
        dispatch(actions.sendPolls(readyInfo))
    }

    return(
        <div>
            <h1>Ankieta</h1>
            <form onSubmit={sendInfo}>
                <p>Twoje imie:</p>
                <input type="text" name="name" defaultValue={poll.name} readOnly/> 
                <p>Twoje nazwisko:</p>
                <input type="text" name="surname" defaultValue={poll.surname} readOnly/> 
                <p>Twój pesel:</p>
                <input type="text" name="pesel" defaultValue={poll.pesel} readOnly/> 
                <p>Jaki jest twój kraj pochodzenia:</p>
                <input type="text" name="nationality" defaultValue={poll.nationality} /> 
                
                <p>Czy jesteś niepełnosprawny?</p>
                <input type="checkbox" name='disability' defaultChecked={poll.disability}/> Tak

                <p>Data Twoich urodzin:</p>
                <input type="date" name='date' defaultValue={poll.date_of_birth} />
                
                <p>Płeć</p>
                <select name='sex' defaultValue={poll.sex}>
                    <option value='Kobieta'>Kobieta</option>
                    <option value='Mężczyzna'>Mężczyzna</option>
                    <option value='Wole nie odpowiadać'>Wole nie odpowiadać</option>
                </select>

                <p>Jakie jest twoje wyznanie?</p>
                <input type="text" name='confession' defaultValue={poll.confession}/>

                <p>Jaki jest Twój stan cywilny?</p>
                <select name='marital' defaultValue={poll.marital_status}>
                    <option value='Żonaty'>Żonaty</option>
                    <option value='Zamężna'>Zamężna</option>
                    <option value='Wdowiec'>Wdowiec</option>
                    <option value='Wdowa'>Wdowa</option>
                    <option value='Rozwiedziony'>Rozwiedziony</option>
                    <option value='Rozwiedziona'>Rozwiedziona</option>
                    <option value='Separowany'>Separowany</option>
                    <option value='Separowana'>Separowana</option>
                </select>

                <p>Jakie jest Twoje wykształcenie?</p>
                <select name='education' defaultValue={poll.education}>
                    <option value='podstawowe'>Wykształcenie podstawowe</option>
                    <option value='gimnazjalne'>Wykształcenie gimnazjalne</option>
                    <option value='zawodowe'>Wykształcenie zasadnicze zawodowe</option>
                    <option value='średnie'>Wykształcenie średnie</option>
                    <option value='wyższe'>Wykształcenie wyższe</option>
                </select>

                <p><b>Informacje o twoim gospodarstwie domowym:</b></p>
                <div className="household">
                    <p>Czy masz dzieci?</p>
                    <select name='children' defaultValue={poll.household.children === true ? 'Tak' : 'Nie'}>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                    </select>
                    <p>Czy mieszkasz z rodzicami?</p>
                    <select name='livingWithParents' defaultValue={poll.household.living_with_parents === true ? 'Tak' : 'Nie'}>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                    </select>
                    <p>Czy masz partnera/partnerkę?</p>
                    <select name='partner' defaultValue={poll.household.partner === true ? 'Tak' : 'Nie'}>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                    </select>
                </div>

                <p><b>Informacje o twoim adresie zamieszkania w dziecinstwie(??):</b></p>
                <div className='address'>
                    <p>W jakim mieście mieszkałeś/aś?</p>
                    <input type="text" name='cityHousehold' defaultValue={poll.address.city}/>
                    <p>Podaj nazwę ulicy</p>
                    <input type="text" name='streetHousehold' defaultValue={poll.address.street_name}/>
                    <p>Nr domu</p>
                    <input type="number" name='homeNumberHousehold' min="0" defaultValue={poll.address.home_number}/>
                    <p>Nr lokalu</p>
                    <input type="number" name='apartmentNumberHousehold' min="0" defaultValue={poll.address.apartment_number}/>
                    <p>Kod pocztowy</p>
                    <input type="text" name="postCodeHousehold" defaultValue={poll.address.postal_code}/>
                </div>

                <p><b>Informacje o twoim obecnym adresie zamieszkania:</b></p>
                <div className="registered_address">
                    <p>W jakim mieście mieszkasz?</p>
                    <input type="text" name='city' defaultValue={poll.registered_address.city}/>
                    <p>Podaj nazwę ulicy</p>
                    <input type="text" name='street' defaultValue={poll.registered_address.street_name}/>
                    <p>Nr domu</p>
                    <input type="number" name='homeNumber' min="0" defaultValue={poll.registered_address.home_number}/>
                    <p>Nr lokalu</p>
                    <input type="number" name='apartmentNumber' min="0" defaultValue={poll.registered_address.apartment_number}/>
                    <p>Kod pocztowy</p>
                    <input type="text" name="postCode" defaultValue={poll.registered_address.postal_code}/>
                </div>

                <p><b>Informacje o twojej pracy:</b></p>
                <div className="workplace">
                    <p>Na jakim stanowisku pracujesz?</p>
                    <input type="text" name='type'  defaultValue={poll.workplace.type}/>
                    <p>Podaj nazwę firmy w której pracujesz</p>
                    <input type="text" name='nameWorkplace' defaultValue={poll.workplace.name}/>
                    <p><b>Podaj adres firmy:</b></p>
                    <div className="address_workplace">
                        <p>W jakim mieście mieszkasz?</p>
                        <input type="text" name='cityWorkplace' defaultValue={poll.workplace.address.city} />
                        <p>Podaj nazwę ulicy</p>
                        <input type="text" name='streetWorkplace' defaultValue={poll.workplace.address.street_name} />
                        <p>Nr domu</p>
                        <input type="number" name='homeNumberWorkplace' min="0" defaultValue={poll.workplace.address.home_number} />
                        <p>Nr lokalu</p>
                        <input type="number" name='apartmentNumberWorkplace' min="0" defaultValue={poll.workplace.address.apartment_number} />
                        <p>Kod pocztowy</p>
                        <input type="text" name="postCodeWorkplace" defaultValue={poll.workplace.address.postal_code} />
                    </div>
                </div>

                <button type='submit'>Wyślij ankietę</button>
            </form>
        </div>
    )

}
    
export default connect(mapStateToProps)(Polls);

