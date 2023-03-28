import React, { useState } from 'react'
import "./navbar.css"

const Navbar = (props) => {

  const [inputValue, setInputValue] = useState('');

  const handleChgInput = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="navbar">
      <input id="inputNavbar" type="text" onChange={handleChgInput}
      placeholder="Which Pokemon are you looking for ?" />

      {/* Child to Parent */}
      <div className="child-to-parent">
        {props.handleCallBack(inputValue)}
      </div>
      {/* End */}

    </div>
  )
}

export default Navbar;