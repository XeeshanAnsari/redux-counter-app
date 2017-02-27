import { connect } from 'react-redux';
import Counter from '../components/Counter.jsx'
import React ,{ Component } from 'react';




function mapStateToProps(state) {
    return {
   // we will  get state from store and send to component via props 
    }
}

function mapDispatchToProps(dispatch){
    // we will  get dispach action from store and send to component via props 
    return {

    }
}
class App extends Component {
    render(){
        return(
            <div>
              <Counter />
            </div>
        )
    }
}
 


export default connect(mapStateToProps ,mapDispatchToProps)(App)

