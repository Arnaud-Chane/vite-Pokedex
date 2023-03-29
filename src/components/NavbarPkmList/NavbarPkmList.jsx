import React, { useState } from 'react'
import './navbarPkmList.css'

const NavbarPkmList = (props) => {

  const [pokemonList2, setPokemonList2] = useState(props.pkmList)

  let [nameToDisplay, setNameToDisplay] = useState("")
  const handleClickDisplayTheName = (pkm) => {
    setNameToDisplay(nameToDisplay = pkm)
  }

  let pkmListForJsx = pokemonList2.map((pkm) => (
    <button key={pkm.name}
            onClick={() => handleClickDisplayTheName(pkm.name)}>
      {pkm.name}
    </button>
  ));

  return (
    <div  className="navbar-pkm-list-ctn">
      {pkmListForJsx}

      {/* Child to Parent */}
      <div className="child-to-parent">
        {props.handleCallback(nameToDisplay)}
      </div>
      {/* End */}

    </div>
  )
}

export default NavbarPkmList;