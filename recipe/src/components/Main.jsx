import List from "./List.jsx";
import React, { useState } from "react";
import Anime from "./Anime.jsx";

function Main({ darkMode }) {
  const [genre, setGenre] = useState([]);
  const [animeShown, setAnimeShown] = useState(false);

  function addGenre(formData) {
    const newGenre = formData.get("genre");
    setGenre((g) => [...g, newGenre]);
  }

  const styles = { backgroundColor: darkMode ? "#000000cf" : "#e4c6ec2b" };

  function animeButton() {
    setAnimeShown((a) => !a);
  }

  return (
    <main style={styles}>
      <form className="genre-form" action={addGenre}>
        <input type="text" placeholder="favourite Genre..." name="genre" />
        <button>Add</button>
      </form>
      {genre.length > 0 && (
        <section>
          <h2>Genres on Hand :</h2>
          <ul className="list-genre">
            <List best={genre} />
          </ul>
          {genre.length > 1 && (
            <div className="ready-genre">
              <h2>Ready for animes ?</h2>
              <p>Genrate best animes for based on your favourite keywords</p>
              <button onClick={animeButton}>Get Animes</button>
            </div>
          )}
          <p>Here is the anime list: </p>
        </section>
      )}
      {animeShown || <Anime />}
    </main>
  );
}

export default Main;
