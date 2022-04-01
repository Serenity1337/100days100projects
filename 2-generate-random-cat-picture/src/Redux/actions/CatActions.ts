import axios from 'axios'
import { GET_RANDOM_CAT } from '../action-types/CatActionTypes'
import {Dispatch} from 'redux'
export const GetRandomCatAction = async (dispatch: Dispatch) => {
try {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search')
  // return {
  //   type: GET_RANDOM_CAT,
  //   payload: res.data[0].url
  // }

  dispatch({type: GET_RANDOM_CAT, payload: res.data[0].url})

  
}
catch(e) {
  console.log(e)
}
}
