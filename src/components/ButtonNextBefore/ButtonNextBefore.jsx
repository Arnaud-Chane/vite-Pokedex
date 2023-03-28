import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import "./button.css"

const ButtonNextBefore = (props) => {

  const [index, setIndex] = useState(0);

  const handleClickBefore = () => {
    if(index > 0) {
      setIndex(index -1)
    }
  }

  const handleClickNext = () => {
    if(index < (props.pkmListLimit - 1)){
      setIndex(index + 1)
    } 
  }

  return(
    <div className="btn-next-bfr-ctn">
      {index > 0 && 
      <button onClick={handleClickBefore}> Previous </button>}

      {index < props.pkmListLimit - 1 &&
      <button onClick={handleClickNext}> Next </button>}

      {/* Child to Parent */}
      <div className="child-to-parent">
        {props.handleCallBack(index)}
      </div>
      {/* End */}
    </div>
  );
}

export default ButtonNextBefore;