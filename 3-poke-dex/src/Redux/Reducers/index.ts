import {combineReducers} from 'redux'
import { pokemonReducer } from './pokeReducer'

const Reducers = combineReducers({pokemon:pokemonReducer})

export default Reducers