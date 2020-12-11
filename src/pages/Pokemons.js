import React, { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'

const Pokemons = () => {
  const api = "https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0"
  const [pokemons, getPokemons] = useState({
    results: [],
    next: '',
    previous: ''
  })

  useEffect(() => {
    fetchData(api)
  }, [])
  const fetchData = async  api => {
    fetch(api)
      .then(response => response.json())
      .then(pokemons => {
        const results = pokemons.results
        const next = pokemons.next
        const previous = pokemons.previous
        getPokemons({ results, previous, next })
      })
  }
  return (
    <>
      <h1>Pokemons uwu </h1>
      <div className="pokemons">
        {
          pokemons.results.map(pokemon => (
            <Pokemon
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))
        }
      </div>
    </>
  )
}

export default Pokemons
