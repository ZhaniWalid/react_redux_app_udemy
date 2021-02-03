// This file is splitted into 2 files : './Store/reducers/counter.js' & './Store/reducers/result.js'

// import * as actionsTypes from './actions';

// //// In this file we are defining our 'Reducer' that we will use it in our 'Redux' App
// const initialState = {
//     counter: 0,
//     results: []
// };

// const reducer = (state = initialState, action) => {
    
//     // We don't need 'break' here => when each 'return' statement is complete it will 'break' and exit 'auto'
//     switch (action.type) {
//         // action.type === 'INCREMENT' => Connected to 'mapDispatchToProps' on [Counter.js]
//         case actionsTypes.INCREMENT:
//             const newState = Object.assign({}, state);
//             newState.counter = state.counter + 1;
//             return newState;
//             /* return {
//                 counter: state.counter + 1
//             } */
//         // action.type === 'DECREMENT' => Connected to 'mapDispatchToProps' on [Counter.js]    
//         case actionsTypes.DECREMENT:
//             return {
//                 ...state, // Distribute the old 'state' => keeping the 'counter'
//                 counter: state.counter - 1
//             }
//         // action.type === 'ADD' => Connected to 'mapDispatchToProps' on [Counter.js]    
//         case actionsTypes.ADD:
//             return {
//                 // action.valAdd === 27 => Connected to 'mapDispatchToProps' on [Counter.js] 
//                 // => ...dispatch({type: 'ADD', valAdd: 27})
//                 ...state,
//                 counter: state.counter + action.valAdd
//             }
//         // action.type === 'SUBSTRACT' => Connected to 'mapDispatchToProps' on [Counter.js]    
//         case actionsTypes.SUBSTRACT:
//             return {
//                 // action.valSub === 7 => Connected to 'mapDispatchToProps' on [Counter.js] 
//                 // => ...dispatch({type: 'SUBSTRACT', valSub: 7})
//                 ...state,
//                 counter: state.counter - action.valSub
//             }
//         // I want to return an 'updated' version of my 'state'
//         // action.type === 'STORE_RESULT' => Connected to 'mapDispatchToProps' on [Counter.js] 
//         case actionsTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 // Concat => returns a new array which is the older array + the arg you add to the concat
//                 // => it's an 'immutable' way of updating an array by adding an item => for all cases
//                 results: state.results.concat({idStoreRes: new Date(), valueStoreRes: state.counter})
//             }
//         // action.type === 'DELETE_RESULT' => Connected to 'mapDispatchToProps' on [Counter.js]     
//         case actionsTypes.DELETE_RESULT:
//             //// Method [1] ////
//             // const id = 2;
//             // // Create a copy of 'results[]' table => by copying all the 'elements' in the 'state results' on the 'newArray'
//             // const newArray = [...state.results];
//             // // splice() => Removes elements from an array and, if necessary, inserts new elements in their place
//             // //             returning the deleted elements.
//             // // @param start — The zero-based location in the array from which to start removing elements.
//             // // @param deleteCount — The number of elements to remove.
//             // newArray.splice(id, 1); // 'Updated' Array after the 'Delete'

//             //// Method [2] ////
//             // Delete 'elements immutablly'
//             // Return 'true' => if that 'index' !== the 'index' of the 'element' you want to 'remove it'
//             const updatedArray = state.results.filter(result => result.idStoreRes !== action.resultElId);
//             return {
//                 ...state,
//                 results: updatedArray
//             }
//     }
//     return state;
// };

// export default reducer;