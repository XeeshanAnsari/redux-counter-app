import { connect } from 'react-redux';
import Counter from '../components/Counter.jsx'
import React ,{ Component } from 'react';

import CounterAction from '../store/actions/counter'




function mapStateToProps(state) {
    return {
   // we will  get state from store and send to component via props 
     incCounter: state.incrementCounter.incrementState,
     decCounter: state.decrementCounter.decrementState
    }
}

function mapDispatchToProps(dispatch){
    // we will  get dispach action from store and send to component via props 
    return {
        increment: () => dispatch(CounterAction.increment()),
        decrement: () => dispatch(CounterAction.decrement()),
        incrementWithValue : function(value){
            console.log("incrementing With Input of " + value)
            return dispatch(CounterAction.incrementWithValue(value))

        },
        decrementWithValue: function(value){
            console.log("decrementing With Value Of " + value)
            return dispatch(CounterAction.decrementWithValue(value))
        }

    }
}
class App extends Component {


    incrementUpdateCounter(value){
           this.props.incrementWithValue(value);
    }
    decrementUpdateCounter(value){
           this.props.decrementWithValue(value);
    }
    render(){
        return(
            <div>
              <Counter
              counter={ this.props.incCounter + this.props.decCounter}
                increment={this.props.increment} 
                decrement={this.props.decrement} 
                incrementUpdate={this.incrementUpdateCounter.bind(this)}
                decrementUpdate={this.decrementUpdateCounter.bind(this)}
                 />
              
            </div>
        )
    }
}
 


export default connect(mapStateToProps ,mapDispatchToProps)(App)

