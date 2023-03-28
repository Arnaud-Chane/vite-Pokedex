import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const PokemonCards = ({pokemon}) => {
  return (
    <div className="card-ctn">
      <figure className="cards">
        <img src={(pokemon.imgSrc)}
             alt={(pokemon.imgSrc)? pokemon.name : "???"}/>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

PokemonCards.propTypes = {
  pokemon: PropTypes.shape({
      name: PropTypes.string,
      imgSrc: PropTypes.string,
    }).isRequired,
};

export default PokemonCards;