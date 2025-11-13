import { useEffect } from "react";
import "../App.css";
import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
            }
      )
    );
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item
      )
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <div>
        <button onClick={rollDice} className="roll-dice">
          {gameWon ? "New game" : "Roll"}
        </button>
      </div>
    </main>
  );
}

export default App;
