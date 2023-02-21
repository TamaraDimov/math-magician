import './Calculator.css';

import React from 'react';

function Calculator() {
  return (
    <div className="container">
      <div className="screen" />
      <div className="buttons no">AC</div>
      <div className="buttons no">+/-</div>
      <div className="buttons no">%</div>
      <div className="buttons func">÷</div>
      <div className="buttons no">7</div>
      <div className="buttons no">8</div>
      <div className="buttons no">9</div>
      <div className="buttons func">*</div>
      <div className="buttons no">4</div>
      <div className="buttons no">5</div>
      <div className="buttons no">6</div>
      <div className="buttons func">+</div>
      <div className="buttons no">1</div>
      <div className="buttons no">2</div>
      <div className="buttons no">3</div>
      <div className="buttons func">-</div>
      <div className="buttons zero">0</div>
      <div className="buttons">.</div>
      <div className="buttons func">=</div>
    </div>
  );
}

export default Calculator;
