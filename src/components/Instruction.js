import React, { useState } from 'react';
import '../style.css';
import './Instruction.css';

export default function Instruction() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => (show ? setShow(false) : setShow(true))}
        onBlur={() => setShow(false)}
      >
        Instructions
      </button>
      <aside style={{display: !show && 'none'}} >
        <h2>Combinatorics</h2>
        <p>Combinatorics is an art of counting complicated things</p>
        <h2>Combinatorics principles</h2>
        <ol>
          <li>
            if there are <b>a</b> ways of completing first task, and <b>b</b>{' '}
            ways of completing second
          </li>
          <li>and no outcome in one task affects outcome in second then</li>
          <li>
            there are <b>a</b> * <b>b</b> ways to complete both tasks together
          </li>
        </ol>
        <p>
          based on that principle there is ONE universal algorithm for finding
          Number of ways for completing a task
        </p>
        <h2>algorithm</h2>
        <ol>
          <li>
            numberOfWays = NumberOfTasks! ( <em>! is factorial</em> )
          </li>
          <p>e.g. number of ways to arrange letters (tasks) in word 'JIM'?</p>
          <p>JIM = 3 letters = 3! = 6</p>
          <li>
            if NumberOfRepeatedTasks = 1 then NumberOfWays = NumberOfTasks! /
            NumberOfRepeatedTasks!
          </li>
          <p>e.g. number of ways to arrange letters (tasks) in word 'BOB'?</p>
          <p>
            BOB = 3 letters total and 2 repeated letter 'B' = 3! / 2! = 6 / 2 =
            3
          </p>
          <li>
            if NumberOfRepeatedTasks {'>'} 1 then NumberOfWays = NumberOfTasks!
            / (NumberOfRepeatedTasks1! * NumberOfRepeatedTasks2! * ... *
            NumberOfRepeatedTasksN!)
          </li>
          <p>
            e.g. number of ways to arrange letters (tasks) in word 'SNEEZES'?
          </p>
          <p>
            SNEEZES = 7 letters and 2 repeated 'S' and 3 repeated 'E' = 7! / (2!
            * 3!) = 420
          </p>
        </ol>
      </aside>
    </div>
  );
}
// compshi onhoverze gamochndes da mobilur planshetshi on clickze
