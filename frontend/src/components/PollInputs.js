const PollInputs = ({sendInfo, user}) => (
        <form onSubmit={sendInfo}>
        <p>Twoje imie:</p>
        <input type="text" name="name" defaultValue={user.name} readOnly/> 
        <p>Twoje nazwisko:</p>
        <input type="text" name="surname" defaultValue={user.surname} readOnly/> 
        <p>Twój pesel:</p>
        <input type="text" name="pesel" defaultValue={user.pesel} readOnly/> 
        <p>Jaki jest twój kraj pochodzenia:</p>
        <input type="text" name="nationality" defaultValue={user.nationality} /> 
        
        <p>Czy jesteś niepełnosprawny?</p>
        <input type="checkbox" name='disability' defaultChecked={user.disability}/> Tak

        <p>Data Twoich urodzin:</p>
        <input type="date" name='date' defaultValue={user.date_of_birth} />
        
        <p>Płeć</p>
        <select name='sex' defaultValue={user.sex}>
            <option value='Kobieta'>Kobieta</option>
            <option value='Mężczyzna'>Mężczyzna</option>
            <option value='Wole nie odpowiadać'>Wole nie odpowiadać</option>
        </select>

        <p>Jakie jest twoje wyznanie?</p>
        <input type="text" name='confession' defaultValue={user.confession}/>

        <p>Jaki jest Twój stan cywilny?</p>
        <select name='marital' defaultValue={user.marital_status}>
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
        <select name='education' defaultValue={user.education}>
            <option value='podstawowe'>Wykształcenie podstawowe</option>
            <option value='gimnazjalne'>Wykształcenie gimnazjalne</option>
            <option value='zawodowe'>Wykształcenie zasadnicze zawodowe</option>
            <option value='średnie'>Wykształcenie średnie</option>
            <option value='wyższe'>Wykształcenie wyższe</option>
        </select>

        <p><b>Informacje o twoim gospodarstwie domowym:</b></p>
        <div className="household">
            <p>Czy masz dzieci?</p>
            <select name='children' defaultValue={user.household.children === true ? 'Tak' : 'Nie'}>
                <option value="Tak">Tak</option>
                <option value="Nie">Nie</option>
            </select>
            <p>Czy mieszkasz z rodzicami?</p>
            <select name='livingWithParents' defaultValue={user.household.living_with_parents === true ? 'Tak' : 'Nie'}>
                <option value="Tak">Tak</option>
                <option value="Nie">Nie</option>
            </select>
            <p>Czy masz partnera/partnerkę?</p>
            <select name='partner' defaultValue={user.household.partner === true ? 'Tak' : 'Nie'}>
                <option value="Tak">Tak</option>
                <option value="Nie">Nie</option>
            </select>
        </div>

        <p><b>Informacje o twoim adresie zamieszkania w dziecinstwie(??):</b></p>
        <div className='address'>
            <p>W jakim mieście mieszkałeś/aś?</p>
            <input type="text" name='cityHousehold' defaultValue={user.address.city}/>
            <p>Podaj nazwę ulicy</p>
            <input type="text" name='streetHousehold' defaultValue={user.address.street_name}/>
            <p>Nr domu</p>
            <input type="number" name='homeNumberHousehold' min="0" defaultValue={user.address.home_number}/>
            <p>Nr lokalu</p>
            <input type="number" name='apartmentNumberHousehold' min="0" defaultValue={user.address.apartment_number}/>
            <p>Kod pocztowy</p>
            <input type="text" name="postCodeHousehold" defaultValue={user.address.postal_code}/>
        </div>

        <p><b>Informacje o twoim obecnym adresie zamieszkania:</b></p>
        <div className="registered_address">
            <p>W jakim mieście mieszkasz?</p>
            <input type="text" name='city' defaultValue={user.registered_address.city}/>
            <p>Podaj nazwę ulicy</p>
            <input type="text" name='street' defaultValue={user.registered_address.street_name}/>
            <p>Nr domu</p>
            <input type="number" name='homeNumber' min="0" defaultValue={user.registered_address.home_number}/>
            <p>Nr lokalu</p>
            <input type="number" name='apartmentNumber' min="0" defaultValue={user.registered_address.apartment_number}/>
            <p>Kod pocztowy</p>
            <input type="text" name="postCode" defaultValue={user.registered_address.postal_code}/>
        </div>

        <p><b>Informacje o twojej pracy:</b></p>
        <div className="workplace">
            <p>Na jakim stanowisku pracujesz?</p>
            <input type="text" name='type'  defaultValue={user.workplace.type}/>
            <p>Podaj nazwę firmy w której pracujesz</p>
            <input type="text" name='nameWorkplace' defaultValue={user.workplace.name}/>
            <p><b>Podaj adres firmy:</b></p>
            <div className="address_workplace">
                <p>W jakim mieście mieszkasz?</p>
                <input type="text" name='cityWorkplace' defaultValue={user.workplace.address.city} />
                <p>Podaj nazwę ulicy</p>
                <input type="text" name='streetWorkplace' defaultValue={user.workplace.address.street_name} />
                <p>Nr domu</p>
                <input type="number" name='homeNumberWorkplace' min="0" defaultValue={user.workplace.address.home_number} />
                <p>Nr lokalu</p>
                <input type="number" name='apartmentNumberWorkplace' min="0" defaultValue={user.workplace.address.apartment_number} />
                <p>Kod pocztowy</p>
                <input type="text" name="postCodeWorkplace" defaultValue={user.workplace.address.postal_code} />
            </div>
        </div>

        <button type='submit'>Wyślij ankietę</button>
    </form>
)


export default PollInputs