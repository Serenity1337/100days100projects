import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { postReducer } from './postReducer'

const reducers = combineReducers({ posts: postReducer, users: userReducer })
export default reducers
