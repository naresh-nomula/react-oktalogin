import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

const Registration = ( props ) => {
    return (
        <div>
            <div>Registration Form</div>
            <Link to="/">Back</Link>
        </div>
    )
};

export default Registration;