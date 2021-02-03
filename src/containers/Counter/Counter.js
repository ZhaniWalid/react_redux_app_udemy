import React, { Component } from 'react';
// 'connect' => Is a func which 'returns' a 'hoc_higher-oder-component' => Used on export
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionsCreators from '../../Store/actions/index_store';

class Counter extends Component {

    // We can remove the 'state' & 'counterChangedHandler' 
    // => because we are only using the 'Gloabl Redux Store & State'
    /* state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    } */

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                {/* <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  /> */}
                {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  /> */}
                {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> */}

                <CounterOutput value={this.props.ctr} />           
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />           
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />       
                <CounterControl label="Add 27" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 7" clicked={this.props.onSubstratCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Default</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        // idStoreRes => is 'referring' to the 'new Date()' ( idStoreRes: new Date() ) snapshot on [reducer.js]
                         <li key={strResult.idStoreRes} onClick={() => this.props.onDeleteResult(strResult.idStoreRes)}>{strResult.valueStoreRes}</li>
                    ))}            
                </ul>
            </div>
        );
    }
}

// Map the 'redux state' to 'props' => 'state' stored in 'redux'
const mapStateToProps = state => {
    return {
        // This 'state' will reach out the 'redux state' defined in 'initialState' on [reducer.js] 
        // => A 'counter' prop is available => return it's value and stored it on 'ctr' prop here
        // => To use it in this file
        ///// ctr: state.counter,

        // Same for 'storedResults' who will get the value from 'results' prop who is defined in 'initialState' on [reducer.js]  
        //// storedResults: state.results

        // state.'ctr' => this 'ctr' is from ou Global state in [index.js] on 'const rootReducer = combineReducers(..)
        ctr: state.ctr.counter,
        // state.'res' => this 'res' is from ou Global state in [index.js] on 'const rootReducer = combineReducers(..)
        storedResults: state.res.results 
    };
};

// Will store a func which will receive the dispatch func which can execute as an arg
// => Will call 'dispatch' on the 'store' behind the scene
const mapDispatchToProps = dispatch => {
    return {
        // When-ever a props ( 'onIncrementCounter', 'onDecrementCounter'...) is executed as a func 
        // => then this 'dispatch()' method is going to be executed

        // type: 'INCREMENT' => will be connected to the [reducer.js] file
        //// onIncrementCounter: () => dispatch({type: actionsTypes.INCREMENT}), // Replaced by 'Action Creators' :: 'increment()' 
        onIncrementCounter: () => dispatch(actionsCreators.increment()),

        // type: 'DECREMENT' => will be connected to the [reducer.js] file
        // onDecrementCounter: () => dispatch({type: actionsTypes.DECREMENT}),  // Replaced by 'Action Creators' :: 'decrement()' 
        onDecrementCounter: () => dispatch(actionsCreators.decrement()), 

        // type: 'ADD' => will be connected to the [reducer.js] file
        // onAddCounter: () => dispatch({type: actionsTypes.ADD, valAdd: 27}), // Replaced by 'Action Creators' :: 'add()' 
        onAddCounter: () => dispatch(actionsCreators.add(27)),
        
        // type: 'SUBSTRACT' => will be connected to the [reducer.js] file
        // onSubstratCounter: () => dispatch({type: actionsTypes.SUBSTRACT, valSub: 7}), // Replaced by 'Action Creators' :: 'substract()'  
        onSubstratCounter: () => dispatch(actionsCreators.substract(7)),

        // type: 'STORE_RESULT' => will be connected to the [reducer.js] file
        // onStoreResult: (resEl) => dispatch({type: actionsTypes.STORE_RESULT, resultCtr: resEl}), // Replaced by 'Action Creators' :: 'storeResult()' 
        onStoreResult: (resEl) => dispatch(actionsCreators.storeResult(resEl)),

        // type: 'DELETE_RESULT' => will be connected to the [reducer.js] file
        // onDeleteResult: (idEl) => dispatch({type: actionsTypes.DELETE_RESULT, resultElId: idEl}) // Replaced by 'Action Creators' :: 'deleteResult()' 
        onDeleteResult: (idEl) => dispatch(actionsCreators.deleteResult(idEl))
    };
};

// export default Counter;
// connect => Give us this container (Counter) who is connected to the 'store' with access to 'ctr' prop
//         => So we can output 'ctr' prop
export default connect(mapStateToProps, mapDispatchToProps)(Counter);