import { createStore } from 'redux'
import root_reducers from './reducers/root_reducer'


let store = createStore(root_reducers);

// getState check  for current state 
store.subscribe(() =>
  console.log(store.getState())
);

export default store;