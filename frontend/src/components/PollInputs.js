const PollInputs = ({sendInfo, user}) => (
        <form onSubmit={sendInfo}>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Twoje imie:</p>
            </div>
            <div className="poll-col75">
                <input type="text" name="name" defaultValue={user.name} readOnly/> 
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Twoje nazwisko:</p>
            </div>
            <div className="poll-col75">
                <input type="text" name="surname" defaultValue={user.surname} readOnly/> 
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Twój pesel:</p>
            </div>
            <div className="poll-col75">
                <input type="text" name="pesel" defaultValue={user.pesel} readOnly/> 
            </div>
        </div>
        
        <div className="poll-row">
            <div className="poll-col25">
                <p>Jaki jest twój kraj pochodzenia:</p>
            </div>
            <div className="poll-col75">
                <input type="text" name="nationality" defaultValue={user.nationality} /> 
            </div>
        </div>
        
        <div className="poll-row">
            <div className="poll-col25">
                <p>Czy jesteś niepełnosprawny?</p>
            </div>
            <div className="poll-col75">
                <input type="checkbox" name='disability' defaultChecked={user.disability}/> Tak
            </div>
        </div>
        
        <div className="poll-row">
            <div className="poll-col25">
                <p>Data Twoich urodzin:</p>
            </div>
            <div className="poll-col75">
                <input type="date" name='date' defaultValue={user.date_of_birth} />
            </div>
        </div>
        
        <div className="poll-row">
            <div className="poll-col25">
                <p>Płeć</p>
            </div>
            <div className="poll-col75">
                <select name='sex' defaultValue={user.sex}>
                    <option value='Kobieta'>Kobieta</option>
                    <option value='Mężczyzna'>Mężczyzna</option>
                    <option value='Wole nie odpowiadać'>Wole nie odpowiadać</option>
            </select>
            </div>
        </div>
        
        <div className="poll-row">
            <div className="poll-col25">
                <p>Jakie jest twoje wyznanie?</p>
            </div>
            <div className="poll-col75">
                <input type="text" name='confession' defaultValue={user.confession}/>
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Jaki jest Twój stan cywilny?</p>
            </div>
            <div className="poll-col75">
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
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Jakie jest Twoje wykształcenie?</p>
            </div>
            <div className="poll-col75">
                <select name='education' defaultValue={user.education}>
                    <option value='podstawowe'>Wykształcenie podstawowe</option>
                    <option value='gimnazjalne'>Wykształcenie gimnazjalne</option>
                    <option value='zawodowe'>Wykształcenie zasadnicze zawodowe</option>
                    <option value='średnie'>Wykształcenie średnie</option>
                    <option value='wyższe'>Wykształcenie wyższe</option>
                </select>
            </div>
        </div>

        <div className="poll-row">
        <p><b>Informacje o twoim gospodarstwie domowym:</b></p>
        </div>
        <div className="household">

        <div className="poll-row">
            <div className="poll-col25">
                <p>Czy masz dzieci?</p>
            </div>
            <div className="poll-col75">
                <select name='children' defaultValue={user.household.children === true ? 'Tak' : 'Nie'}>
                        <option value="Tak">Tak</option>
                        <option value="Nie">Nie</option>
                </select>
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Czy mieszkasz z rodzicami?</p>
            </div>
            <div className="poll-col75">
                <select name='livingWithParents' defaultValue={user.household.living_with_parents === true ? 'Tak' : 'Nie'}>
                    <option value="Tak">Tak</option>
                    <option value="Nie">Nie</option>
                </select>
            </div>
        </div>


        <div className="poll-row">
            <div className="poll-col25">
                <p>Czy masz partnera/partnerkę?</p>
            </div>
            <div className="poll-col75">
                <select name='partner' defaultValue={user.household.partner === true ? 'Tak' : 'Nie'}>
                    <option value="Tak">Tak</option>
                    <option value="Nie">Nie</option>
                </select>
            </div>
        </div>
        </div>

        <div className="poll-row">
        <p><b>Informacje o twoim adresie zamieszkania w dziecinstwie(??):</b></p>
        </div>
        <div className='address'>

        <div className="poll-row">
            <div className="poll-col25">
                <p>W jakim mieście mieszkałeś/aś?</p>
            </div>
            <div className="poll-col75">
                <input type="text" name='cityHousehold' defaultValue={user.address.city}/>
            </div>
        </div>
            
        <div className="poll-row">
            <div className="poll-col25">
                <p>Podaj nazwę ulicy</p>
            </div>
            <div className="poll-col75">
                <input type="text" name='streetHousehold' defaultValue={user.address.street_name}/>
            </div>
        </div>
            
        <div className="poll-row">
            <div className="poll-col25">
                <p>Nr domu</p>
            </div>
            <div className="poll-col75">
                <input type="number" name='homeNumberHousehold' min="0" defaultValue={user.address.home_number}/>
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Nr lokalu</p>
            </div>
            <div className="poll-col75">
                <input type="number" name='apartmentNumberHousehold' min="0" defaultValue={user.address.apartment_number}/>
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Kod pocztowy</p>
            </div>
            <div className="poll-col75">
                <input type="text" name="postCodeHousehold" defaultValue={user.address.postal_code}/>
            </div>
        </div>
        </div>

        <div className="poll-row">
        <p><b>Informacje o twoim obecnym adresie zamieszkania:</b></p>
        </div>
        <div className="registered_address">

        <div className="poll-row">
            <div className="poll-col25">
                <p>W jakim mieście mieszkasz?</p>
            </div>
            <div className="poll-col75">
                <input type="text" name='city' defaultValue={user.registered_address.city}/>
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Podaj nazwę ulicy</p>
            </div>
            <div className="poll-col75">
                <input type="text" name='street' defaultValue={user.registered_address.street_name}/>
            </div>
        </div>
            
        <div className="poll-row">
            <div className="poll-col25">
                <p>Nr domu</p>
            </div>
            <div className="poll-col75">
                <input type="number" name='homeNumber' min="0" defaultValue={user.registered_address.home_number}/>
            </div>
        </div>
            
        <div className="poll-row">
            <div className="poll-col25">
                <p>Nr lokalu</p>
            </div>
            <div className="poll-col75">
                <input type="number" name='apartmentNumber' min="0" defaultValue={user.registered_address.apartment_number}/>
            </div>
        </div>
            
        <div className="poll-row">
            <div className="poll-col25">
                <p>Kod pocztowy</p>
            </div>
            <div className="poll-col75">
                <input type="text" name="postCode" defaultValue={user.registered_address.postal_code}/>
            </div>
        </div>
        </div>

        <div className="poll-row">
        <p><b>Informacje o twojej pracy:</b></p>
        </div>
        <div className="workplace">

        <div className="poll-row">
            <div className="poll-col25">
                <p>Na jakim stanowisku pracujesz?</p>
            </div>
            <div className="poll-col75">
                <input type="text" name='type'  defaultValue={user.workplace.type}/>
            </div>
        </div>

        <div className="poll-row">
            <div className="poll-col25">
                <p>Podaj nazwę firmy w której pracujesz</p>
            </div>
            <div className="poll-col75">
                <input type="text" name='nameWorkplace' defaultValue={user.workplace.name}/>
            </div>
        </div>
            
            <div className="poll-row">
            <p><b>Podaj adres firmy:</b></p>
            </div>
            <div className="address_workplace">

            <div className="poll-row">
                <div className="poll-col25">
                    <p>W jakim mieście mieszkasz?</p>
                </div>
                <div className="poll-col75">
                    <input type="text" name='cityWorkplace' defaultValue={user.workplace.address.city} />
                </div>
            </div>

            <div className="poll-row">
                <div className="poll-col25">
                    <p>Podaj nazwę ulicy</p>
                </div>
                <div className="poll-col75">
                    <input type="text" name='streetWorkplace' defaultValue={user.workplace.address.street_name} />
                </div>
            </div>
                
            <div className="poll-row">
                <div className="poll-col25">
                    <p>Nr domu</p>
                </div>
                <div className="poll-col75">
                    <input type="number" name='homeNumberWorkplace' min="0" defaultValue={user.workplace.address.home_number} />
                </div>
            </div>
                
            <div className="poll-row">
                <div className="poll-col25">
                    <p>Nr lokalu</p>
                </div>
                <div className="poll-col75">
                    <input type="number" name='apartmentNumberWorkplace' min="0" defaultValue={user.workplace.address.apartment_number} />
                </div>
            </div>

            <div className="poll-row">
                <div className="poll-col25">
                    <p>Kod pocztowy</p>
                </div>
                <div className="poll-col75">
                    <input type="text" name="postCodeWorkplace" defaultValue={user.workplace.address.postal_code} />
                </div>
            </div>
            </div>
        </div>
        <div className="poll-row">
        <button className="cta2" type='submit'>Wyślij ankietę</button>
        </div>
    </form>
)


export default PollInputs