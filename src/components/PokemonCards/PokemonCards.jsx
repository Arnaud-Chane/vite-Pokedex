import React from 'react';
import ReactDOM from 'react-dom';


const PokemonCards = ({pokemon}) => {
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