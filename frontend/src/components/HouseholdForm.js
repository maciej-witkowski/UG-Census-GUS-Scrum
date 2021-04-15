import {React} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    profile: state.profile.profile
});

const HouseholdForm = ({user, previousPage, nextPage}) => (
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
                                    <select name='children' defaultValue={user.household.children === true ? 'Tak' : 'Nie'}>
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
                                    <select name='livingWithParents' defaultValue={user.household.living_with_parents === true ? 'Tak' : 'Nie'}>
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
                                    <select name='partner' defaultValue={user.household.partner === true ? 'Tak' : 'Nie'}>
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
                    <input type="button" onClick={nextPage} className={"button is-success is-medium"} value="Nastepna strona"/>
                </div>
            </div>
)

export default connect(mapStateToProps)(HouseholdForm);
