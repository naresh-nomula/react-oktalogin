import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";
import {authenticate} from "../../actions/index";
import "../../../css/login.scss";
import "../../../css/input.scss";

export const LoginForm = props => {

    const {handleSubmit} = props;
    return (
        <div className="log-in-container row">
            <form onSubmit={handleSubmit}>
                <div className="log-body">
                    <h1>Login</h1>
                    <div>
                        <div className="group">
                            <Field component="input" name="email" type="text" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Your Email</label>
                        </div>
                        <div className="group">
                            <Field component="input" type="password" name="password" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Your Password</label>
                        </div>
                        <div className="forgot">
                            <span>Forgot</span><Link to="/forgot"> Password</Link>
                        </div>
                    </div>
                </div>
                <div className="log-footer">
                    <div>
                        <Link to="/register">Create New Account</Link>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({
    form: 'authenticationForm',
    onSubmit: authenticate,
})(LoginForm)