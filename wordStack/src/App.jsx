import { useState } from "react";
import "./App.css";
import { languages } from "./languages.js";
import { clsx } from "clsx";

function App() {
  const [currentWord, setCurrentWords] = useState("abcdefh");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessLetter, setGuessLetter] = useState([]);

  const wrongGuess = guessLetter.filter((l) => !currentWord.includes(l)).length;

  const correctGuess = guessLetter.filter((l) =>
    currentWord.includes(l)
  ).length;

  const isGameOver = !(wrongGuess < 9);
  const isGameWon = correctGuess === currentWord.length;

  function addGuess(alph) {
    setGuessLetter((prev) => {
      if (prev.includes(alph)) return prev;
      return [...prev, alph];
    });
  }

  const lettersElements = currentWord.split("").map((letter, index) => {
    return (
      <div className="letter" key={index}>
        {guessLetter.includes(letter) ? letter.toUpperCase() : ""}
      </div>
    );
  });

  const items = languages.map((lang, index) => {
    const isLost = index < wrongGuess;

    const className = clsx("chip", isLost && "lost");

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <div className={className} key={index} style={styles}>
        {lang.name}
      </div>
    );
  });

  const keyBoardElements = alphabet.split("").map((alph, i) => {
    const isGuessed = guessLetter.includes(alph);
    const isCorrect = isGuessed && currentWord.includes(alph);
    const isWrong = isGuessed && !currentWord.includes(alph);
    const className = clsx({
      wrong: isWrong,
      correct: isCorrect,
    });

    return (
      <button
        onClick={() => addGuess(alph)}
        className={`keyboard ${className}`}
        key={i}
      >
        {alph.toUpperCase()}
      </button>
    );
  });
  return (
    <div className="main-ct">
      <div className="head-ct">
        <h1> Word Stack Game</h1>
        <p>
          Guess the word under 7 attemepts to keep the programming community
          alive
        </p>
        {(isGameOver || isGameWon) && (
          <div className="status-ct">
            {isGameOver && (
              <>
                <h1>GameOver</h1>
                <p>Try again</p>
              </>
            )}

            {isGameWon && (
              <>
                <h1>Game Won</h1>
                <p>Welldone</p>
              </>
            )}
          </div>
        )}
      </div>
      <div>
        <h1> Items </h1>
        <div className="items-ct">{items}</div>
      </div>
      <div className="word-ct">{lettersElements}</div>
      <div className="keyboard-ct">{keyBoardElements}</div>
    </div>
  );
}

export default App;
