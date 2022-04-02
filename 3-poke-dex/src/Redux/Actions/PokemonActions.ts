import {GET_SINGLE_POKEMON, GetSinglePokemon} from '../Action-types/Pokemon-action-types'
import {Dispatch} from 'redux'
import axios from 'axios'
export const GetPokemon = (pokemon: string) => async (dispatch:Dispatch<GetSinglePokemon>) => {

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    dispatch({
      type: GET_SINGLE_POKEMON,
      payload: res.data
    })
  } catch(e) {
    console.log(e)
  }

}