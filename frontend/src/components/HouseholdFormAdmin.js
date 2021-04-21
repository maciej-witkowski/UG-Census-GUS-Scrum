import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";
import ChildForm from './ChildForm';

const mapStateToProps = state => ({
    user: state.user.user
});

const HouseholdFormAdmin = ({previousPage, user, dispatch, nextPage}) => {

    const [childrenExists, setChildrenExists] = useState(user.household.children.exists);
    const [childrenNumber, setChildrenNumber] = useState(user.household.children.number);
    const [livingWithType, setLivingWithType] = useState(user.household.living_with_parents.type);
    const [people, setPeople] = useState(user.household.living_with_parents.people);

    // spouse

    const [spouseName, setSpouseName] = useState("");
    const [spouseSurname, setSpouseSurname] = useState("");
    const [spousePesel, setSpousePesel] = useState("");

    // roomate

    const [roomMateName, setRoomMateName] = useState("");
    const [roomMateSurname, setRoomMateSurname] = useState("");

    // partner

    const [partnerName, setPartnerName] = useState("");
    const [partnerSurname, setPartnerSurname] = useState("");

    // rodzice

    const [motherName, setMotherName] = useState("");
    const [motherSurname, setMotherSurname] = useState("");

    const [fatherName, setFatherName] = useState("");
    const [fatherSurname, setFatherSurname] = useState("");


    const [readyToRenderChild, setReadyToRenderChild] = useState(false);

    const [saved, setSaved] = useState(user.household.saved);

    const [children, setChildren] = useState(user.household.children.children);  // set children when next page 

    const addChild = (c) => {
   
        const kids = children.map((child, index) => {
            if (c.index === index) {
                return c;
            }
            else {
                return child;
            }
        })
        setChildren(kids);
    }
   
    useEffect(() => {
        console.log(user);
    }, [user]);


    const prepareChildrenArray = () => {
        const emptyChild = {
            name: "",
            surname: "",
            pesel: "",
        }

        const emptyChildren = new Array(parseInt(childrenNumber)).fill(0).map(() => ({...emptyChild}));
        setChildren(emptyChildren);
    }

    const preparePartnerRoommate = () => {
        const emptyPerson = [{
            name: "",
            surname: "",
        }]
        setPeople(emptyPerson);
    }

    const prepareSpouse = () => {
        const emptyPerson = [{
            name: "",
            surname: "",
            pesel: ""
        }]
        setPeople(emptyPerson);
    }

    const prepareParents = () => {
        const emptyMother = {
            name: "",
            surname: "",
        }
        const emptyFather = {
            name: "",
            surname: "",
        }
        setPeople([emptyMother, emptyFather]);
    }

    useEffect(() => {
            if (livingWithType === "Z małżonkiem") {
                prepareSpouse();
            
            }
            if (livingWithType === "Ze współlokatorem") {
                preparePartnerRoommate();
               
            }
            if (livingWithType === "Z partnerem") {
                preparePartnerRoommate();
               
            }
            if (livingWithType === "Z rodzicami") {
                prepareParents();
                
            }
    }, [livingWithType]);


    useEffect(() => {
        if(children.length > 0) {
            setReadyToRenderChild(true);
        }
    }, [children]);

    useEffect(() => {
        if (parseInt(childrenNumber) > 0 && !saved) {
            prepareChildrenArray();
        }
    }, [childrenNumber]);


    useEffect(() => {
        if (childrenExists && !saved) {
           setChildrenNumber(1);
        }

    }, [childrenExists]);

    
    useEffect (() => {
        if(saved) {
            if (livingWithType === "Z małżonkiem") {
                setSpouseName(people[0].name);
                setSpouseSurname(people[0].surname);
                setSpousePesel(people[0].pesel);
            }
            if (livingWithType === "Ze współlokatorem") {
                setRoomMateName(people[0].name);
                setRoomMateSurname(people[0].surname);
            }
            if (livingWithType === "Z partnerem") {
                console.log("here")
                console.log(people[0].name);
                setPartnerName(people[0].name);
                setPartnerSurname(people[0].surname);
            }
            if (livingWithType === "Z rodzicami") {
                setMotherName(people[0].name);
                setMotherSurname(people[0].surname);
    
                setFatherName(people[1].name);
                setFatherSurname(people[1].surname);
            }
        }
    }, [saved])

    const updatePoll = () => {

        if (childrenExists === false) {
            setChildren([]);
            setChildrenNumber(0);
        }

        let p = [];

        if (livingWithType === "Z małżonkiem") {
            p = [{
                name: spouseName,
                surname: spouseSurname,
                pesel: spousePesel
            }]
        }
        if (livingWithType === "Ze współlokatorem") {
            p = [{
                name: roomMateName,
                surname: roomMateSurname,
            }]
        }
        if (livingWithType === "Z partnerem") {
            p = [{
                name: partnerName,
                surname: partnerSurname,
            }]
        }
        if (livingWithType === "Z rodzicami") {
            p = [{
                name: motherName,
                surname: motherSurname,
            },
            {
                name: fatherName,
                surname: fatherSurname,
            }
        ]
        }
        const info = {
            household: {
                saved: true,
                children: {
                    exists: childrenExists,
                    number: childrenNumber,
                    children: children
                },
                living_with_parents: {
                    type: livingWithType,
                    people: p
                }
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
                <div className={"column is-centered mx-5 is-5 mt-6"}>
                    <p className={"subtitle has-text-danger-dark"}>Informacje o twoim gospodarstwie domowym:</p>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy masz dzieci?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='children' value={childrenExists === true ? 'Tak' : 'Nie'} onChange={(ev) => ev.target.value === "Tak"? setChildrenExists(true): setChildrenExists(false)}>
                                        <option value="Tak">Tak</option>
                                        <option value="Nie">Nie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {childrenExists? (<div className={"column is-centered mx-5 is-5"}>
                        <div>
                            <p className={"label"}>Ile?</p>
                        </div>
                        <input className={"input is-info"} type="number" name='childrenNumber' value={childrenNumber} min="1" max="15" placeholder={"Ilość dzieci"}
                        onChange={(ev) => setChildrenNumber(ev.target.value)}
                        />
                    </div>): null}

                {childrenExists && parseInt(childrenNumber) > 0  && readyToRenderChild? (<div>
                    {Array(parseInt(childrenNumber)).fill(null).map((value, index) => {
                        console.log(childrenNumber);
                        console.log(index);
                        return (<ChildForm key={index} passChild={addChild} index={index}> </ChildForm>)
                        })}
                </div>) : console.log(childrenNumber)}
                

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Z kim mieszkasz?</p>
                    </div> 
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='livingWithParents' value={livingWithType} onChange={(ev) => setLivingWithType(ev.target.value)}>
                                        <option value="Sam">Sam</option>
                                        <option value="Z małżonkiem">Z małżonkiem</option>
                                        <option value="Ze współlokatorem">Ze współlokatorem</option>
                                        <option value="Z partnerem">Z partnerem</option>
                                        <option value="Z rodzicami">Z rodzicami</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

{livingWithType === "Z małżonkiem"?
                ( <div className={"box m-6 field is-centered"}>
                <div>
                    <p className="label">Dane małżonka: </p>
                </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Imię: </p>
                </div>
                <input className={"input is-info"} type="text" name="spouseName" value={spouseName} onChange={(ev) => setSpouseName(ev.target.value)} placeholder={"Imie"} />
            </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Nazwisko:</p>
                </div>
                <input className={"input is-info"} type="text" name="spouseSurname" value={spouseSurname} onChange={(ev) => setSpouseSurname(ev.target.value)} placeholder={"Nazwisko"} />
            </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className={"label"}>PESEL:</p>
                </div>
                <input className={"input is-info"} type="text" name="spousePesel" value={spousePesel} onChange={(ev) => setSpousePesel(ev.target.value)} placeholder={"PESEL"}/>
            </div>
            </div>
            ):null}

{livingWithType === "Ze współlokatorem"?
                ( <div className={"box m-6 field is-centered"}>
                <div>
                    <p className="label">Dane współlokatora: </p>
                </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Imię: </p>
                </div>
                <input className={"input is-info"} type="text" name="roomMateName" value={roomMateName} onChange={(ev) => setRoomMateName(ev.target.value)} placeholder={"Imie"} />
            </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Nazwisko:</p>
                </div>
                <input className={"input is-info"} type="text" name="roomMateSurname" value={roomMateSurname} onChange={(ev) => setRoomMateSurname(ev.target.value)} placeholder={"Nazwisko"} />
            </div>
            </div>
            ):null} 

{livingWithType === "Z partnerem"?
                ( <div className={"box m-6 field is-centered"}>
                <div>
                    <p className="label">Dane partnera: </p>
                </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Imię: </p>
                </div>
                <input className={"input is-info"} type="text" name="partnerName" value={partnerName} onChange={(ev) => setPartnerName(ev.target.value)} placeholder={"Imie"} />
            </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Nazwisko:</p>
                </div>
                <input className={"input is-info"} type="text" name="partnerSurname" value={partnerSurname} onChange={(ev) => setPartnerSurname(ev.target.value)} placeholder={"Nazwisko"} />
            </div>
            </div>
            ):null} 

{livingWithType === "Z rodzicami"?
                ( <div className={"box m-6 field is-centered"}>

                <div>
                    <p className="label">Dane Matki: </p>
                </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Imię: </p>
                </div>
                <input className={"input is-info"} type="text" name="motherName" value={motherName} onChange={(ev) => setMotherName(ev.target.value)} placeholder={"Imie"} />
            </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Nazwisko:</p>
                </div>
                <input className={"input is-info"} type="text" name="motherSurname" value={motherSurname} onChange={(ev) => setMotherSurname(ev.target.value)} placeholder={"Nazwisko"} />
            </div>

            <div>
                    <p className="label">Dane Ojca: </p>
                </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Imię: </p>
                </div>
                <input className={"input is-info"} type="text" name="fatherName" value={fatherName} onChange={(ev) => setFatherName(ev.target.value)} placeholder={"Imie"} />
            </div>
        
            <div className={"column is-centered mx-5 is-5"}>
                <div>
                    <p className="label">Nazwisko:</p>
                </div>
                <input className={"input is-info"} type="text" name="fatherSurname" value={fatherSurname} onChange={(ev) => setFatherSurname(ev.target.value)} placeholder={"Nazwisko"} />
            </div>
            </div>
            ):null} 

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previous} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={next} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>
)
    }

export default connect(mapStateToProps)(HouseholdFormAdmin);
