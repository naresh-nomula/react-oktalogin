import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import {authenticate} from "../actions/index";

const renderField = ({ input, label, type, meta: { touched, error, warning }, id, imgClasses }) => (
    <div className="md-form">
        <i className={imgClasses}></i>
        <input {...input} type={type} className="form-control" id={id} />
        {touched &&
        ((error && <span>{error}</span>))}
        <label  htmlFor={id}>{label}</label>
    </div>
);

class Authentication extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="row justify-content-md-center">
                 <div className="card col-md-6">
                     <form className="card-body" onSubmit={handleSubmit}>
                         <p className="h3 text-left mb-4">Sign in</p>
                            <Field name="email" component={renderField} type="text" id="defaultForm-email"
                                   label="Your Email" imgClasses="fa fa-envelope prefix" />
                            <Field name="password" component={renderField} type="password" id="defaultForm-pass"
                                    label="Your Password" imgClasses="fa fa-lock prefix" />
                         <div className="text-center">
                            <button type="submit" className="btn btn-default">Register</button>
                             <button type="submit" className="btn btn-default">Login</button>
                         </div>
                    </form>
                 </div>
            </div>
        );
    }
}

function validate(values) {
    const error= {};
    if (!values.email) {
        error.email = "Enter the email";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = 'Invalid email address';
    }
    if(!values.password) {
        error.password = "Enter the password";
    }
    return error;
}

export default  reduxForm({
    // a unique name for the form
    form: 'authenticationForm',
    onSubmit:authenticate,
    validate
})(Authentication)

