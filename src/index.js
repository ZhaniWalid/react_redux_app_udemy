import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; // 'Redux' 
// import reducer from './Store/reducer'; // 'Reducer' ===> we will use the 2 'separated files' instead of the 1 file
import counterReducer from './Store/reducers/counter';
import resultReducer from './Store/reducers/result';
// Use this cmd: 'npm install --save redux react-redux' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
// => Allow us to 'hook' our 'redux store' to our 'react app'
import { Provider } from 'react-redux'; 
// Use this cmd: 'npm install --save redux-thunk' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
// => This package just exports the Middleware
import thunk from 'redux-thunk';

// Turns an object whose values are different reducer functions, into a single reducer function
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// Middleware func => who have 'nested' functions 
//                 => func 'tree' who is 'valid Middleware' executable by 'Redux' && connected to the 'Store' 
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Disptaching ', action);
            // This will let the 'action' to 'continue' to the 'Reducer' => We need to 'pass' an 'action' as 'param'
            const result = next(action);
            console.log('[Middleware] store ', store.getState());
            return result;
        };
    };
};

// 'compose' => allows us to combine enhancers
// 'composeEnhancers' => will take this 'window.__REDUX...' dynamically injected variable :: if exist 
//    else :: will take the native redux 'compose' solution which don't give us DevTools support of 'Redux' on the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// NB: We should install this extension on the browser 'Redux DevTools' to use the DevTools of 'Redux' on the browser
//               => to activate this 'window.__REDUX...' 
//  => Then there is this link to follow, for Section '1.1 Basic store' (for a 'Basic store')
// OR Section '1.2 Advanced store setup' (for and 'advanced store' To use a 'middleware and enhancers') : 
// https://github.com/zalmoxisus/redux-devtools-extension

// Takes a 'reducer' as an 'input'
//// const store = createStore(reducer);
//// const store = createStore(rootReducer);

// applyMiddleware => Creates a 'store enhancer' that applies 'middleware' to the 'dispatch' method of the 'Redux store'.
//      => This is handy for a variety of tasks, such as expressing asynchronous actions in a concise manner,
//      => or logging every action payload.
////const store = createStore(rootReducer, applyMiddleware(logger));

// composeEnhancers(applyMiddleware(logger)) => we are able to 'connect' our 'browser extension ('Redux DevTools')' to the 'store' 'running' on our 'JS code'
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(logger, thunk)
));

// ReactDOM.render(<App />, document.getElementById('root'));
//// The 'Provider' is a 'helper component' which alllows us to kind of 'inject our store'
//// <Provider store={store} /> ==> Like this our 'React App' is connected to the 'store' throught 'redux'
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
