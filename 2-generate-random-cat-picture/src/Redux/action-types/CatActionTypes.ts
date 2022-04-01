export const GET_RANDOM_CAT= "GET_RANDOM_CAT"

export interface GetRandomCat {
  type: typeof GET_RANDOM_CAT,
  payload: {
    url: string
  }
}