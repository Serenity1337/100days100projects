import {GetRandomCat, GET_RANDOM_CAT} from '../action-types/CatActionTypes'
interface InitialStateI {
catReducer: string
}

const initialState: InitialStateI = {
  catReducer: ''
}
export const catReducer = (state: InitialStateI = initialState , action: GetRandomCat) => {
  switch (action.type) {
    case GET_RANDOM_CAT:
      return action.payload
    default:
      return state
  }
}

export default catReducer