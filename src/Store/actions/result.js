import * as actionTypes from './actionsTypes';

// 'Action Creators' => will be 'dispatched' in the 'storeResult()' func
export const saveResult = (res) => {
    // const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        resultCtr: res // updatedResult
    };
};

// 'Action Creators' => create an action (that need to have a type) => useful for handling an 'asynchronous code'
// The 'param:: res' from [Counter.js] => 'onStoreResult: () .... actionsCreators.storeResult(resEl)'
export const storeResult = (res) => {
    // We want to return this action (code inside the 'disptach func') => after 2 seconds
    // This func which will get executed by 'redux-thunk' and where we have 'setTimeout()' 
    // => Where we then 'dispatch' the action who shoud run 'asynchrously and update the store'
    return (dispatch, getState) => {
        setTimeout(() => {
            // 'ctr' => this 'ctr' is from ou Global state in [index.js] on 'const rootReducer = combineReducers(..)    
            // 'counter' => this 'counter' is from 'initialState' in [./Store/reducers/counter.js]
            //// const oldCounter = getState().ctr.counter;
            //// console.log('[ storeResult() ] => [ oldCounter ] : ', oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    };
    
};

// 'Action Creators' => create an action (that need to have a type) => useful for handling an 'asynchronous code'
// The 'param:: resElId' from [Counter.js] => 'onDeleteResult: () .... actionsCreators.deleteResult(idEl)'
export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};