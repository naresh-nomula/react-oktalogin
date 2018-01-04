import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

const Forgot = (props) => {
    return (
        <div>
            <div>Forgot Password Form</div>
            <Link to="/">Back</Link>
        </div>
    )
};

export default Forgot;