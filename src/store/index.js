import { createStore } from 'redux'
import root_reducer from './reducers/root_reducer'


let store = createStore(root_reducer);



export default store;