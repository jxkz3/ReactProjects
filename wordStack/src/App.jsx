import { useState } from "react";
import "./App.css";
import { languages } from "./languages.js";
import { clsx } from "clsx";
import { getFarewellText } from "./fare.js";

function App() {
  const [currentWord, setCurrentWords] = useState("acd");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessLetter, setGuessLetter] = useState([]);

  // 1. GAME LOGIC
  const wrongGuess = guessLetter.filter((l) => !currentWord.includes(l)).length;

  const correctGuess = currentWord
    .split("")
    .every((l) => guessLetter.includes(l));

  const maxAttempts = languages.length;
  const isGameLost = wrongGuess >= maxAttempts;
  const isGameWon = correctGuess;
  const isGameOver = isGameLost || isGameWon;

  // 2. FAREWELL LOGIC (must come *after* wrongGuess is calculated)
  const lastGuess = guessLetter[guessLetter.length - 1];
  const isWrongWord = lastGuess && !currentWord.includes(lastGuess);

  function addGuess(alph) {
    setGuessLetter((prev) => {
      if (prev.includes(alph)) return prev;
      return [...prev, alph];
    });
  }

  // 3. WORD LETTERS UI
  const lettersElements = currentWord.split("").map((letter, index) => {
    return (
      <div className="letter" key={index}>
        {guessLetter.includes(letter) ? letter.toUpperCase() : ""}
      </div>
    );
  });

  // 4. LANGUAGE ITEMS (lifelines)
  const items = languages.map((lang, index) => {
    const isLost = index < wrongGuess;

    const className = clsx("chip", isLost && "lost");

    return (
      <div
        className={className}
        key={index}
        style={{
          backgroundColor: lang.backgroundColor,
          color: lang.color,
        }}
      >
        {lang.name}
      </div>
    );
  });

  // 5. KEYBOARD
  const keyBoardElements = alphabet.split("").map((alph, i) => {
    const isGuessed = guessLetter.includes(alph);
    const isCorrect = isGuessed && currentWord.includes(alph);
    const isWrong = isGuessed && !currentWord.includes(alph);

    const className = clsx("keyboard", {
      wrong: isWrong,
      correct: isCorrect,
    });

    return (
      <button onClick={() => addGuess(alph)} className={className} key={i}>
        {alph.toUpperCase()}
      </button>
    );
  });

  // 6. GAME STATUS CLASS
  const gameStatusClass = clsx("game-status", {
    fail: isGameLost,
    won: isGameWon,
  });

  return (
    <div className="main-ct">
      <div className="head-ct">
        <h1>Word Stack Game</h1>
        <p>
          Guess the word under 7 attempts to keep the programming community
          alive
        </p>

        {isWrongWord && wrongGuess > 0 && (
          <div className="fare-ct">
            <p>Bye {getFarewellText(languages[wrongGuess - 1].name)}</p>
          </div>
        )}

        {isGameOver && (
          <div className={gameStatusClass}>
            {isGameLost ? (
              <>
                <h1>Game Over</h1>
                <p>
                  Guess the word within 8 attempts to keep the programming world
                  safe from Assembly!
                </p>
              </>
            ) : (
              <>
                <h1>Game Won</h1>
                <p>Well done</p>
              </>
            )}
          </div>
        )}
      </div>

      <div>
        <h1>Items</h1>
        <div className="items-ct">{items}</div>
      </div>

      <div className="word-ct">{lettersElements}</div>
      <div className="keyboard-ct">{keyBoardElements}</div>

      {isGameOver && <button className="new-btn">New Game</button>}
    </div>
  );
}

export default App;
