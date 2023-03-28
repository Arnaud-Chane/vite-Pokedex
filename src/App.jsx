import './App.css'
import PokemonCards from './components/PokemonCards/PokemonCards'
import ButtonNextPrevious from './components/ButtonNextPrevious/ButtonNextPrevious'
import Navbar from './components/Navbar/Navbar'
import {useState, useEffect} from 'react'


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/151.png",
  },
];



function App() {

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

  // Callback to retrieve inputValue from Navbar
  let [inputValue, setInputValue] = useState("");
  const callbackInputValue = (inputFromNavbar) => {
    setInputValue(inputValue = inputFromNavbar);
    return (
      <div>
        {inputFromNavbar}
      </div>
    )
  }
  // End




  // useEffect(() => { 
  //   alert("hello pokemon trainer :)")
  // }, [])

  return (
    <div className="App">
      <Navbar handleCallBack={callbackInputValue}/>
      <PokemonCards pokemon={pokemonList[indexCount]}/>
      <ButtonNextPrevious handleCallBack={callbackIndex} pkmListLimit={pokemonList.length}/>
    </div>
  )
}

export default App
