import { combineReducers } from 'redux'
import incrementCounter from './incrementCounter'


const root_reducers = combineReducers({
    incrementCounter,
})


export default root_reducers;