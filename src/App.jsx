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
  {
    name: "Salameche",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
  },
  {
    name: "Carapuce",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
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
