import React from 'react';
import ReactDOM from 'react-dom';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const PokemonCards = () => {
  
  let pokemon = pokemonList[1];

  return (
    <div className="card-ctn">
      <figure className="cards">
        <img src={pokemon.imgSrc}
             alt={(pokemon.imgSrc)? pokemon.name : "???"}/>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCards;