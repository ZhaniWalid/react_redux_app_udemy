// Use this cmd: 'npm install --save redux' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
// require() => This is a 'NodeJS Syntax' == 'import' in 'ReactJS'
const redux = require('redux');

const createStore = redux.createStore;
const initialState = {
    counter: 0
};

//// Reducer
const rootReducer = (state = initialState, action) => {
    // action.type == 'INC_COUNTER' => store.dispatch({type: 'INC_COUNTER'})
    if (action.type == 'INC_COUNTER') {
        return {
            // Distribute the properties of 'state' and Copy it in immutable way
            ...state,
            counter: state.counter + 1 // counter: 0 +1 = 1
        };
    }
    // action.type == 'ADD_COUNTER' => store.dispatch({type: 'ADD_COUNTER', value: 10})
    if (action.type == 'ADD_COUNTER') {
        return {
            // Distribute the properties of 'state' and Copy it in immutable way
            ...state,
            // action.value => store.dispatch({type: 'ADD_COUNTER', value: 10})
            counter: state.counter + action.value // counter: 1 (= 0 + 1) + 10 = 11
        };
    }
    return state;
};

//// Store
// Takes a 'reducer' as an 'input'
const store = createStore(rootReducer);
// To get what this console will log from 'redux' => you should to run this cmd in the terminal:
// 'node src/redux_basics.js'
console.log(store.getState());

//// Subscription
// Executed when ever the 'action' is 'Dispatched' (when ever there is: 'store.dispatch..') and 'mutated the store'
store.subscribe(() => {
    console.log('[redux_basics.js] => [Subscription]: ', store.getState());
});

//// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

