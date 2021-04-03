import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';
import {Provider} from "react-redux";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const persistedState = loadState();


const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, apiMiddleware)
);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
