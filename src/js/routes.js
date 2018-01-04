import React from "react";
import Authentication from "./components/login/login_form";
import Forgot from "./components/forgotPassword/forgot_password_form";
import Registration from "./components/registration/registration_form";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Authentication} />
            <Route path='/register' exact component={Registration} />
            <Route path='/forgot' exact component={Forgot} />
            <Route render={function () {
                return <h1>Not Found</h1>
            }} />
        </Switch>
    </BrowserRouter>
);
