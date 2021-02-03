import * as actionTypes from './actionsTypes';

// 'Action Creators' => create an action (that need to have a type) => useful for handling an 'asynchronous code'
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

// 'Action Creators' => create an action (that need to have a type) => useful for handling an 'asynchronous code'
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

// 'Action Creators' => create an action (that need to have a type) => useful for handling an 'asynchronous code'
// The 'param:: valueAdd' from [Counter.js] => 'onAddCounter: () .... actionsCreators.add(27)'
export const add = (valueAdd) => {
    return {
        type: actionTypes.ADD,
        valAdd: valueAdd
    };
};

// 'Action Creators' => create an action (that need to have a type) => useful for handling an 'asynchronous code'
// The 'param:: valueSub' from [Counter.js] => 'onSubstratCounter: () .... actionsCreators.substract(7)'
export const substract = (valueSub) => {
    return {
        type: actionTypes.SUBSTRACT,
        valSub: valueSub
    };
};