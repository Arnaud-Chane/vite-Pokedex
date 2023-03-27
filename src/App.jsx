import PokemonCards from './components/PokemonCards/PokemonCards'
import './App.css'


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


function App() {
  return (
    <div className="App">
      <PokemonCards pokemon={pokemonList[0]}/>
    </div>
  )
}

export default App
