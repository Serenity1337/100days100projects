export const GET_SINGLE_POKEMON = "GET_SINGLE_POKEMON"

export type PokemonType = {
  moves: PokemonMove[],
  sprites: PokeImg,
  stats: PokeStat[]
  types: PokeType[]
}

export type PokemonMove = {
  move: {
    name: string
  }
}

export type PokeImg = {
  front_default: string
}

export type PokeStat = {
  base_stat: number,
  stat: {
    name: string
  }

}

export type PokeType = {
  type: {
    name: string
  }
}

export interface GetSinglePokemon  {
  type: typeof GET_SINGLE_POKEMON,
  payload: PokemonType
}