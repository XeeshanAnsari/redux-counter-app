import { createStore } from 'redux'
import root_reducer from './reducers/root_reducer'


let store = createStore(root_reducer);

// getState check  for current state 
store.subscribe(() =>
  console.log(store.getState())
);

export default store;