import React from "react";
import Authentication from "./components/app";
import {BrowserRouter, Route, Switch} from "react-router-dom";
const Greet = () => {
    return (<div>Greet</div>)
}
export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Authentication} />
            <Route path='/register' exact component={Greet} />
            <Route path='/forgot' exact component={Authentication} />
            <Route render={function () {
                return <h1>Not Found</h1>
            }} />
        </Switch>
    </BrowserRouter>
);
