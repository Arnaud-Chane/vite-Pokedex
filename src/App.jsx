import './App.css'
import PokemonCards from './components/PokemonCards/PokemonCards'
import Navbar from './components/Navbar/Navbar'
import NavbarPkmList from './components/NavbarPkmList/NavbarPkmList'
import {useState, useEffect} from 'react'

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://www.pokebip.com/pages/icones/poke/GO/1.png",
    },
    {
      name: "charmander",
      imgSrc: "https://www.pokebip.com/pages/icones/poke/GO/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://www.pokebip.com/pages/icones/poke/GO/7.png",
    },
    {
      name: "pikachu",
      imgSrc: "https://www.pokebip.com/pages/icones/poke/GO/25.png",
    },
    {
      name: "mew",
      imgSrc: "https://www.pokebip.com/pages/icones/poke/GO/151.png",
    },
  ];

  // Callback to retrieve index from PokemonCards
  let [indexCount, setIndexCount] = useState(0);
  const callbackIndex = (indexFromBtn) => {
    setIndexCount(indexCount = indexFromBtn);
    return (
      <div>
        {indexFromBtn}
      </div>
    )
  }
  // End

  // Callback to retrieve pokemonName to display the correct imgSrc
  let [nameToDisplay, setNameToDisplay] = useState(pokemonList[0].name);
  const callbackNameToDisplay = (nameFromNavbarPkmList) => {
    setNameToDisplay(nameToDisplay = nameFromNavbarPkmList);
    return(
      <div>
        {nameFromNavbarPkmList}
      </div>
    )
  }

  // End


  return (
    <div className="App">
      <PokemonCards pokemon={pokemonList[indexCount]} />
      <Navbar pkmListLimit={pokemonList.length} handleCallBack={callbackIndex} />
      <NavbarPkmList pkmList={pokemonList} handleCallback={callbackNameToDisplay} />
    </div>
  )
}

export default App

