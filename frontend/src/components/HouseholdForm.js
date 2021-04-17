import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";
import ChildForm from './ChildForm';

const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll
});

const HouseholdForm = ({previousPage, poll, dispatch, nextPage}) => {

    const [childrenExists, setChildrenExists] = useState(poll.household.children.exists);
    const [childrenNumber, setChildrenNumber] = useState(poll.household.children.number);
    const [livingWith, setLivingWith] = useState(poll.household.living_with);

    const [children, setChildren] = useState(poll.household.children.children);  // set children when next page 

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

    const createEmptyChildObjects = () => {

        const child = {
            name: "",
            surname: "",
            pesel: "",
        }

        let kids = [];

        for (let i = 0; i < parseInt(childrenNumber); i++) {
            kids = [...kids, child]
          }
        setChildren(kids);
    }
   
    useEffect(() => {
        console.log(poll);
    }, [poll]);

    useEffect(() => {
        if (parseInt(childrenNumber) > 0 ) {
            createEmptyChildObjects();
        }
    }, [childrenNumber]);


    const updatePoll = () => {

        console.log(children);
        const info = {
            household: {
                children: {
                    exists: childrenExists,
                    number: childrenNumber,
                    children: children
                }
            }
        }
        dispatch(actions.setInfo(info));
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
                        <input className={"input is-info"} type="number" name='childrenNumber' defaultValue={childrenNumber} min="0" max="15" placeholder={"Ilość dzieci"}
                        onChange={(ev) => setChildrenNumber(ev.target.value)}
                        />
                    </div>): null}

                {childrenNumber? (<div>
                    {Array(parseInt(childrenNumber)).fill(null).map((value, index) => (
                        <ChildForm key={index} passChild={addChild} index={index}> </ChildForm>
                    ))}
                </div>) : console.log(childrenNumber)}
                

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Z kim mieszkasz?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='livingWithParents' value={livingWith} onChange={(ev) => setLivingWith(ev.target.value)}>
                                        <option value="sam">Sam</option>
                                        <option value="partner">Z partnerem</option>
                                        <option value="rodzice">Z rodzicami</option>
                                        <option value="współlokator">Ze wspólokatorem</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previousPage} className={"button is-danger is-medium mr-4"} value="Poprzednia strona"/>
                    <input type="button" onClick={updatePoll} className={"button is-success is-medium"} value="Następna strona"/>
                </div>
            </div>
)
    }

export default connect(mapStateToProps)(HouseholdForm);
