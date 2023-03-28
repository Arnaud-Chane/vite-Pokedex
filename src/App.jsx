import './App.css'
import PokemonCards from './components/PokemonCards/PokemonCards'
import ButtonNextBefore from './components/ButtonNextBefore/ButtonNextBefore'
import {useState} from 'react'


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
  },
];



function App() {
  let [indexCount, setIndexCount] = useState(0);
  function Callback(indexFromBtn) {

    setIndexCount(indexCount = indexFromBtn);

    return (
      <div>
        {indexFromBtn}
      </div>
    )
  }

  return (
    <div className="App">
      <PokemonCards pokemon={pokemonList[indexCount]}/>
      {/* <PokemonCards pokemon={pokemonList[0]}/> */}
      <ButtonNextBefore handleCallBack={Callback} pkmListLimit={pokemonList.length}/>
    </div>
  )
}

export default App
