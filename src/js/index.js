import React from 'react';
import ReactDOM from 'react-dom';
import Route from "./routes";
import {Provider} from "react-redux";
import {store} from "./reducers/index";

ReactDOM.render(
    <Provider store={store}>
        <Route/>
    </Provider>,
    document.getElementById("reactapp")
);
