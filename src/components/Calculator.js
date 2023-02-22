import React, { useState } from 'react';
import calculate from './logic/calculate';
import './Calculator.css';

function Calculator() {
  const [results, setRes] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setRes(calculate(results, e.target.textContent));
  };

  return (
    <div className="container">
      <input
        className="screen"
        type="text"
        value={results.next || results.total || '0'}
      />
      <button type="button" className="buttons no" onClick={handleClick}>
        AC
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        +/-
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        %
      </button>
      <button type="button" className="buttons func" onClick={handleClick}>
        ÷
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        7
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        8
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        9
      </button>
      <button type="button" className="buttons func" onClick={handleClick}>
        *
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        4
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        5
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        6
      </button>
      <button type="button" className="buttons func" onClick={handleClick}>
        +
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        1
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        2
      </button>
      <button type="button" className="buttons no" onClick={handleClick}>
        3
      </button>
      <button type="button" className="buttons func" onClick={handleClick}>
        -
      </button>
      <button type="button" className="buttons zero" onClick={handleClick}>
        0
      </button>
      <button type="button" className="buttons" onClick={handleClick}>
        .
      </button>
      <button type="button" className="buttons func" onClick={handleClick}>
        =
      </button>
    </div>
  );
}

export default Calculator;
