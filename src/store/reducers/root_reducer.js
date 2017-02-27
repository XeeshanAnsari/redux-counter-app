import { combineReducers } from 'redux'
import incrementCounter from './incrementCounter'
import decrementCounter from './decrementCounter'


const root_reducers = combineReducers({
    incrementCounter,
    decrementCounter
})


export default root_reducers;