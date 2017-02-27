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
            console.log("user Input " + value)
            return dispatch(CounterAction.incrementWithValue(value))

        }

    }
}
class App extends Component {


    updateCounter(value){
           this.props.incrementWithValue(value);
    }
    render(){
        return(
            <div>
              <Counter
               counter={ this.props.incCounter + this.props.decCounter}
                increment={this.props.increment} 
                decrement={this.props.decrement} 
                update={this.updateCounter.bind(this)} />
              
            </div>
        )
    }
}
 


export default connect(mapStateToProps ,mapDispatchToProps)(App)

