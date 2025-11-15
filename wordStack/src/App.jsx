import { useState } from "react";
import "./App.css";
import { languages } from "./languages.js";

function App() {
  const words = "words";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const letters = words.split("").map((letter, id) => {
    return (
      <div className="letter" key={id}>
        {letter.toUpperCase()}
      </div>
    );
  });

  const keyBoard = alphabet.split("").map((alph, index) => {
    return (
      <button className="keyboard-btn" key={index}>
        {alph}
      </button>
    );
  });

  const items = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <button className="lang-btn" key={lang.name} style={styles}>
        {lang.name}
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
        <div className="status-ct">
          <h1>You won</h1> <p> welldon </p>
        </div>
      </div>
      <div>
        <h1> items </h1>
        <div className="items-ct">{items}</div>
      </div>
      <div className="word-ct">{letters}</div>
      <div className="keyboard-ct">{keyBoard}</div>
    </div>
  );
}

export default App;
