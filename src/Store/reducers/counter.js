import * as actionsTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

//// In this file we are defining our 'Reducer' that we will use it in our 'Redux' App
const initialState = {
    counter: 0
};

const reducerCounter = (state = initialState, action) => {
    
    // We don't need 'break' here => when each 'return' statement is complete it will 'break' and exit 'auto'
    switch (action.type) {
        // action.type === 'INCREMENT' => Connected to 'mapDispatchToProps' on [Counter.js]
        case actionsTypes.INCREMENT:
            // Is replaced by the same code in [utility.js] file using the 'updateObject()' func => it's a bit leaner & cleaner
            /* const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState; */
            /* return {
                counter: state.counter + 1
            } */

            return updateObject(state, {counter: state.counter + 1});
        // action.type === 'DECREMENT' => Connected to 'mapDispatchToProps' on [Counter.js]    
        case actionsTypes.DECREMENT:
            // Is replaced by the same code in [utility.js] file using the 'updateObject()' func => it's a bit leaner & cleaner
            /* return {
                ...state, // Distribute the old 'state' => keeping the 'counter'
                counter: state.counter - 1
            } */

            return updateObject(state, {counter: state.counter - 1});
        // action.type === 'ADD' => Connected to 'mapDispatchToProps' on [Counter.js]
        case actionsTypes.ADD:
            // Is replaced by the same code in [utility.js] file using the 'updateObject()' func => it's a bit leaner & cleaner
            /* return {
                // action.valAdd === 27 => Connected to 'mapDispatchToProps' on [Counter.js] 
                // => ...dispatch({type: 'ADD', valAdd: 27})
                ...state,
                counter: state.counter + action.valAdd
            } */

            return updateObject(state, {counter: state.counter + action.valAdd});
        // action.type === 'SUBSTRACT' => Connected to 'mapDispatchToProps' on [Counter.js]    
        case actionsTypes.SUBSTRACT:
            // Is replaced by the same code in [utility.js] file using the 'updateObject()' func => it's a bit leaner & cleaner
            /* return {
                // action.valSub === 7 => Connected to 'mapDispatchToProps' on [Counter.js] 
                // => ...dispatch({type: 'SUBSTRACT', valSub: 7})
                ...state,
                counter: state.counter - action.valSub
            } */

            return updateObject(state, {counter: state.counter - action.valSub});
    }
    return state;
};

export default reducerCounter;