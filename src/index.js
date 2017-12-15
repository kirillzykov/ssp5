import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
//import store from "./Store/Store"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import {createStore} from "redux"
import {reducer} from "./Reducers/Reducer"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"

let store = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App> </App>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
