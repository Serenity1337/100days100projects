import {GetSinglePokemon, PokemonType, GET_SINGLE_POKEMON} from '../Action-types/Pokemon-action-types'

const defaultPokeState = {}

export interface DefaultPokeStateI {
pokemon?: PokemonType
}




export const pokemonReducer = (state: DefaultPokeStateI = defaultPokeState, action: GetSinglePokemon):DefaultPokeStateI => {
    switch (action.type) {
      case GET_SINGLE_POKEMON:
        return {
          pokemon: action.payload
        }
      default:
        return state
    }
}