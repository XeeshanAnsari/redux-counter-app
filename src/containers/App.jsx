import { connect } from 'react-redux';
import App from '../components/App.jsx'



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

const connect = connect(mapStateToProps ,mapDispatchToProps)(App)


export default connect;

