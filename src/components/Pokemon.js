import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon = ({ pokemon }) => {
  const { name, url } = pokemon
  const _src = url => {
    var url_split = url.split('/')
    var id = url_split[url_split.length - 2]
    const src = "https://pokeres.bastionbot.org/images/pokemon/" + id + '.png'
    return { src, id }
  }
  const { id, src } = _src(url)
  return (
    <Link to={`/pokemons/${id}`}>
      <div className="pokemon">
        <div className="header">
          <h3>{name}</h3>
          <p>{id}</p>
        </div>
        <img src={src} alt={name}/>
      </div>
    </Link>
  )
}

export default Pokemon
