import React from 'react';
import style from './style/quote.css';

function Quote() {
  return (
    <div className={style.quoteWrap}>
      <h3>
        Mathematics is not about numbers, equations, compulations or algorithms.
        It is about understanding.
      </h3>
      <p>--Wiliam Paul Thurston</p>
    </div>
  );
}

export default Quote;
