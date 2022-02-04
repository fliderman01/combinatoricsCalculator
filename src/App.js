import React, { useState } from 'react';
import Instruction from './components/Instruction.js';
import './style.css';

export default function App() {
  const [NumOfTasks, setNumOfTasks] = useState('');
  const [NumOfRepeatedTasks, setNumOfRepeatedTasks] = useState('');
  const [Second, setSecond] = useState('');
  const [Third, setThird] = useState('');
  const [Fourth, setFourth] = useState('');
  const [Fifth, setFifth] = useState('');

  //factorial calculator
  function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * factorialize(num - 1);
    }
  }
  // Combinatorics calculator
  const calculate = (
    numOfTasks,
    numOfRepeatedTasks,
    two,
    three,
    four,
    five
  ) => {
    let numOfWays;
    // 1 input
    numOfTasks && !numOfRepeatedTasks
      ? (numOfWays = factorialize(numOfTasks))
      : 0;
    // 1 repeat
    numOfTasks && numOfRepeatedTasks
      ? (numOfWays =
          factorialize(numOfTasks) / factorialize(numOfRepeatedTasks))
      : 0;
    // 2 repeats
    numOfTasks && numOfRepeatedTasks && two
      ? (numOfWays =
          factorialize(numOfTasks) /
          (factorialize(numOfRepeatedTasks) * factorialize(two)))
      : 0;
    // 3 repeats
    numOfTasks && numOfRepeatedTasks && two && three
      ? (numOfWays =
          factorialize(numOfTasks) /
          (factorialize(numOfRepeatedTasks) *
            factorialize(two) *
            factorialize(three)))
      : 0;
    // 4 repeats
    numOfTasks && numOfRepeatedTasks && two && three && four
      ? (numOfWays =
          factorialize(numOfTasks) /
          (factorialize(numOfRepeatedTasks) *
            factorialize(two) *
            factorialize(three) *
            factorialize(four)))
      : 0;
    // 5 repeats
    numOfTasks && numOfRepeatedTasks && two && three && four && five
      ? (numOfWays =
          factorialize(numOfTasks) /
          (factorialize(numOfRepeatedTasks) *
            factorialize(two) *
            factorialize(three) *
            factorialize(four) *
            factorialize(five)))
      : 0;
    !numOfTasks ? (numOfWays = '') : '';

    return numOfWays;
  };

  return (
    <div className="main">
      <Instruction />
      <h1>Combinatorics calculator!</h1>

      <p id="upOutput">
        <b>
          {calculate(
            NumOfTasks,
            NumOfRepeatedTasks,
            Second,
            Third,
            Fourth,
            Fifth
          )}
        </b>
      </p>
      <br />
      <br />
      <label htmlFor="NumOfTasks">
        Number of Tasks
        <input
          type="text"
          value={NumOfTasks}
          id="NumOfTasks"
          onChange={(e) => setNumOfTasks(e.target.value)}
          autoFocus
        />
      </label>
      <br />
      <label htmlFor="NumOfRepeatedTasks">
        Repeated task <b>One</b>
        <input
          type="text"
          value={NumOfRepeatedTasks}
          id="NumOfRepeatedTasks"
          onChange={(e) => setNumOfRepeatedTasks(e.target.value)}
          disabled={!NumOfTasks && true}
        />
      </label>
      <br />
      <label htmlFor="Second">
        Repeated task <b>Two</b>
        <input
          type="text"
          value={Second}
          id="Second"
          onChange={(e) => setSecond(e.target.value)}
          disabled={!NumOfRepeatedTasks && true}
        />
      </label>
      <br />
      <label htmlFor="Third">
        Repeated task <b>Three</b>
        <input
          type="text"
          value={Third}
          id="Third"
          onChange={(e) => setThird(e.target.value)}
          disabled={!Second && true}
        />
      </label>
      <br />
      <label htmlFor="Fourth">
        Repeated task <b>Four</b>
        <input
          type="text"
          value={Fourth}
          id="Fourth"
          onChange={(e) => setFourth(e.target.value)}
          disabled={!Third && true}
        />
      </label>
      <br />
      <label htmlFor="Fifth">
        Repeated task <b>Five</b>
        <input
          type="text"
          value={Fifth}
          id="Fifth"
          onChange={(e) => setFifth(e.target.value)}
          disabled={!Fourth && true}
        />
      </label>
      <br />
      <p id="downOutput">
        {calculate(
          NumOfTasks,
          NumOfRepeatedTasks,
          Second,
          Third,
          Fourth,
          Fifth
        )}
      </p>
    </div>
  );
}
// get back to ...args
// if you simplify this create new component (& copy this)
