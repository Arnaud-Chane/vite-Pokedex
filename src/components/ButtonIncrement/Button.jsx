import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = () => {

  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(count + 1);
  };

  return(
    <div className="btn-count-component">
      <p className="count-display">{count}</p>
      <div className="btn-count">
        <button onClick={handleClickCount}>+1</button>
      </div>
    </div>

  );
}

export default Button;