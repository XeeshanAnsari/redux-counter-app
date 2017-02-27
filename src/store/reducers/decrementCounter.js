import CounterAction  from '../actions/counter'


// for state object in initial 0
const INITIAL_STATE = {
    decrementState: 0
}

function decrementCounter(state = INITIAL_STATE , action){
      switch(action.type){
          case CounterAction.DECREMENT:
             return Object.assign({}, state ,{ decrementState: state.decrementState - 1});
          default: 
             return state   
      }
}

export default decrementCounter;