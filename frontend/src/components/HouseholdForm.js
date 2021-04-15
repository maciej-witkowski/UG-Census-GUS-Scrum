import {React, useState, useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../actions/actionCreators";

const mapStateToProps = state => ({
    profile: state.profile.profile,
    poll: state.poll.poll
});

const HouseholdForm = ({user, previousPage, poll, dispatch, nextPage}) => {

    const [children, setChildren] = useState(poll.household.children);
    const [living_with_parents, setLiving] = useState(poll.household.living_with_parents);
    const [partner, setPartner] = useState(poll.household.partner);

    useEffect(() => {
        console.log(poll);
    }, [poll]);


    const updatePoll = () => {
        const info = {
            household: {
                children: children,
                living_with_parents: living_with_parents,
                partner: partner
            }
        }
        dispatch(actions.setInfo(info));
        nextPage();
    }

    return(
            <div className={"field is-centered"}>
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
                                    <select name='children' value={children === true ? 'Tak' : 'Nie'} onChange={(ev) => ev.target.value === "Tak"? setChildren(true): setChildren(false)}>
                                        <option value="Tak">Tak</option>
                                        <option value="Nie">Nie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy mieszkasz z rodzicami?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='livingWithParents' value={living_with_parents === true ? 'Tak' : 'Nie'} onChange={(ev) => ev.target.value === "Tak"? setLiving(true): setLiving(false)}>
                                        <option value="Tak">Tak</option>
                                        <option value="Nie">Nie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={"column is-centered mx-5 is-5"}>
                    <div>
                        <p className={"label"}>Czy masz partnera/partnerkę?</p>
                    </div>
                    <div className={"control is-5"}>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="select">
                                    <select name='partner' value={partner === true ? 'Tak' : 'Nie'} onChange={(ev) => ev.target.value === "Tak"? setPartner(true): setPartner(false)}>
                                        <option value="Tak">Tak</option>
                                        <option value="Nie">Nie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={previousPage} className={"button is-success is-medium"} value="Poprzednia strona"/>
                </div>

                <div className={"column is-centered mx-5 is-5 mt-5 mb-4"}>
                    <input type="button" onClick={updatePoll} className={"button is-success is-medium"} value="Nastepna strona"/>
                </div>
            </div>
)
    }

export default connect(mapStateToProps)(HouseholdForm);
