import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form';
import ReduxPromise from "redux-promise";

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer
})
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
export const store = createStoreWithMiddleware(rootReducer);
