import React from 'react';
import CreateInput from './CreateInput'
import * as actions from "../actions/actionCreators";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    user: state.user.user
})

const Database = ({user, dispatch}) => (
    <div>
        <h1>Database</h1>
    </div>
)

export default connect(mapStateToProps)(Database);
