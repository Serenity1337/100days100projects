import { createStore,applyMiddleware } from "redux";
import Reducers from './Reducers'
import thunk from 'redux-thunk'

const Store = createStore(Reducers, applyMiddleware(thunk))
export type RootStore = ReturnType<typeof Reducers>

export default Store