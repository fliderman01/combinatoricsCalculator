import React, { useState } from 'react';
import './style.css';

export default function Calc() {
  const [NumOfTasks, setNumOfTasks] = useState(0);
  const [NumOfRepeatedTasks, setNumOfRepeatedTasks] = useState([]);

  //factorial calculator
  function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * factorialize(num - 1);
    }
  }
  // repeated tasks calculator
  const product = (a, b, c, d, e, f, g, h, i, j, k) => {
    let pdod =
      factorialize(a) *
      factorialize(b) *
      factorialize(c) *
      factorialize(d) *
      factorialize(e) *
      factorialize(f) *
      factorialize(g) *
      factorialize(h) *
      factorialize(i) *
      factorialize(j) *
      factorialize(k);
    return prod;
  };

  const calculate = (numOfTasks, ...args) => {
    let numOfWays;
    // 1 input
    numOfTasks ? (numOfWays = factorialize(numOfTasks)) : 0;
    // 1 repeat
    numOfTasks && args
      ? (numOfWays = factorialize(numOfTasks) / product(args))
      : 0;
    !numOfTasks ? (numOfWays = '') : '';

    return numOfWays;
  };

  return (
    <div>
      <h1>Combinatorics calculator 2!</h1>
      <label htmlFor="NumOfTasks">
        Number of tasks
        <input
          type="text"
          value={NumOfTasks}
          id="NumOfTasks"
          onChange={(e) => setNumOfTasks(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="NumOfRepeatedTasks">
        Number of <b>first</b> repeated task
        <input
          type="text"
          value={NumOfRepeatedTasks}
          id="NumOfRepeatedTasks"
          onChange={(e) => setNumOfRepeatedTasks(e.target.value)}
        />
      </label>
      <br />
      <p>{calculate(NumOfTasks, NumOfRepeatedTasks)}</p>
    </div>
  );
}
// get back to ...args
// if you simplify this create new component (& copy this)
