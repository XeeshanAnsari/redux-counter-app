import CounterAction  from '../actions/counter'


// for state object in initial 0
const INITIAL_STATE = {
    incrementState: 0
}


function incrementCounter(state = INITIAL_STATE , action) {
    switch(action.type) {
        case CounterAction.INCREMENT:
            return Object.assign({}, state, { incrementState : state.incrementState + 1 });
        default:
           state;
    }
    
}

export default incrementCounter;