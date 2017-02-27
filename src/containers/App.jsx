import { connect } from 'react-redux';
import Counter from '../components/Counter.jsx'
import React ,{ Component } from 'react';

import CounterAction from '../store/actions/counter'




function mapStateToProps(state) {
    return {
   // we will  get state from store and send to component via props 
     incCounter: state.incrementCounter.incrementState
    }
}

function mapDispatchToProps(dispatch){
    // we will  get dispach action from store and send to component via props 
    return {
        increment: () => dispatch(CounterAction.increment())

    }
}
class App extends Component {
    render(){
        return(
            <div>
              <Counter counter={this.props.incCounter} update={this.props.increment} />
              
            </div>
        )
    }
}
 


export default connect(mapStateToProps ,mapDispatchToProps)(App)

