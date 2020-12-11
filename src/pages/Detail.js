import React, { useState, useEffect } from 'react'

const Detail = ({ match }) => {
  //mis variables
  const { id } = match.params
  const api = "https://pokeapi.co/api/v2/pokemon-form/"
  const image = "https://pokeres.bastionbot.org/images/pokemon/"

  //mis states
  const [pokemon, getPokemon] = useState({
    id: 0,
    name: "",
    sprites: [],
    version_group: [],
    img: ""
  })

  useEffect(() => {
    fetchPokemon(api + id)
  }, [id])

  const fetchPokemon = async (api) => {
    fetch(api)
      .then(response => response.json())
      .then(pokemonDetail => {
        const { id, name, sprites, version_group } = pokemonDetail
        getPokemon({
          id,
          name,
          sprites,
          version_group,
          img: image + id + '.png'
        })
      })
  }
  const { name, sprites, img } = pokemon
  return (
    <>
      <h1>Detalle Pokemon</h1>
      <div className="pokemon-detalle">
        <div className="poke-image">
          <img className="img" src={img} alt={name} />
        </div>
        <div className="poke-informacion">
          <h2>{name}</h2>
        </div>
      </div>
    </>
  )
}

export default Detail
