import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootStore} from './Redux/Store'
import {GetPokemon} from './Redux/Actions/PokemonActions'
import classes from './App.module.scss'

function App() {
  const [state, setState] = useState('')
  const dispatch = useDispatch()
  const pokeState = useSelector((state:RootStore) => state.pokemon)

  const pokemonInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value)
  }
  const getPokemonHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(GetPokemon(state))
  }
  if (pokeState.pokemon) {
    console.log(pokeState.pokemon, 'hello')
  }
  
  return (
    <div className="App">
      <form action="" onSubmit={getPokemonHandler}>
      <input type="text" name='pokemon' id='pokemon' placeholder='Find pokemon' onChange={pokemonInput}/>
      <button>Find pokemon</button>
      </form>
      
      {
      pokeState.pokemon ? 
      <div className={classes.pokemonWrapper}>
        <img src={pokeState.pokemon.sprites.front_default} alt="" />
        <div className={classes.infoWrapper}>
          <div className={classes.stats}>
            <h1 className={classes.statsLabel}>Pokemon stats:</h1>
            {pokeState.pokemon.stats.map(stat => (
              <div>
              <span className={classes.statName}>{stat.stat.name}: </span>
              <span className={classes.statValue}>{stat.base_stat}</span>
              </div>
            ))}
          </div>
          <div className={classes.typesWrapper}>
            <div className={classes.types}>
              <h1 className={classes.typesLabel}>
                Pokemon types:
              </h1>
              {pokeState.pokemon.types.map(type => (
                <span>{type.type.name}</span>
              ))}
            </div>
          </div>
          <div className={classes.moves}>
            <h1 className={classes.movesLabel}>Pokemon moves:</h1>
            <div className={classes.moveWrapper}>
            {pokeState.pokemon.moves.map(move => (
              <span>{move.move.name}</span>
            ))}
            </div>
            
          </div>
        </div>
      </div>
      : null
      }
    </div>
  );
}

export default App;
