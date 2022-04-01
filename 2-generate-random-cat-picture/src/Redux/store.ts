import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducer from './Reducers'
const Store = createStore(Reducer, applyMiddleware(thunk))

export type StoreType = ReturnType<typeof Reducer>

export default Store