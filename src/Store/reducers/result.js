import * as actionsTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

//// In this file we are defining our 'Reducer' that we will use it in our 'Redux' App
const initialState = {
    results: []
};

const deleteResultHelper = (state, action) => {
    // Delete 'elements immutablly'
    // Return 'true' => if that 'index' !== the 'index' of the 'element' you want to 'remove it'
    const updatedArray = state.results.filter(result => result.idStoreRes !== action.resultElId);
    console.log('[deleteResultHelper] => [updatedArray] : ', updatedArray);
    return updateObject(state, { results: updatedArray });
};

const reducerResult = (state = initialState, action) => {
    
    // We don't need 'break' here => when each 'return' statement is complete it will 'break' and exit 'auto'
    switch (action.type) {
        // I want to return an 'updated' version of my 'state'
        // action.type === 'STORE_RESULT' => Connected to 'mapDispatchToProps' on [Counter.js] 
        case actionsTypes.STORE_RESULT:
            // Is replaced by the same code in [utility.js] file using the 'updateObject()' func => it's a bit leaner & cleaner
            /* return {
                ...state,
                // Concat => returns a new array which is the older array + the arg you add to the concat
                // => it's an 'immutable' way of updating an array by adding an item => for all cases
                /// action.resultCtr : connected to [Counter.js]
                results: state.results.concat({idStoreRes: new Date(), valueStoreRes: action.resultCtr * 2}) // valueStoreRes: state.counter
            } */

            return updateObject(state, { results: state.results.concat( { idStoreRes: new Date(), valueStoreRes: action.resultCtr } ) });
        // action.type === 'DELETE_RESULT' => Connected to 'mapDispatchToProps' on [Counter.js]     
        case actionsTypes.DELETE_RESULT:
            //// Method [1] ////
            // const id = 2;
            // // Create a copy of 'results[]' table => by copying all the 'elements' in the 'state results' on the 'newArray'
            // const newArray = [...state.results];
            // // splice() => Removes elements from an array and, if necessary, inserts new elements in their place
            // //             returning the deleted elements.
            // // @param start — The zero-based location in the array from which to start removing elements.
            // // @param deleteCount — The number of elements to remove.
            // newArray.splice(id, 1); // 'Updated' Array after the 'Delete'

            //// Method [2] ////
            // Delete 'elements immutablly'
            // Return 'true' => if that 'index' !== the 'index' of the 'element' you want to 'remove it'
            /*  // These 2 lignes moved to the helper func 'deleteResultHelper()' => To make the code more 'cleanier & leaner'
            const updatedArray = state.results.filter(result => result.idStoreRes !== action.resultElId);
            return updateObject(state, { results: updatedArray }); */

            // Is replaced by the same code in [utility.js] file using the 'updateObject()' func => it's a bit leaner & cleaner
            /* return {
                ...state,
                results: updatedArray
            } */

            deleteResultHelper(state, action);           
    }
    return state;
};

export default reducerResult;