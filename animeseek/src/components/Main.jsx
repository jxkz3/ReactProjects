import List from "./List.jsx";
import React, { useState } from "react";
import Anime from "./Anime.jsx";
import AnimeCard from "./AnimeCard.jsx";

function Main({ darkMode }) {
  const [genre, setGenre] = useState([]);
  const [animeShown, setAnimeShown] = useState(false);

  function addGenre(e) {
    e.preventDefault();
    const newGenre = e.target.genre.value.trim();
    if (!newGenre) return;
    setGenre((prev) => [...prev, newGenre]);
    e.target.reset();
  }

  const styles = { backgroundColor: darkMode ? "#000000cf" : "#e4c6ec2b" };

  function animeButton() {
    setAnimeShown((a) => !a);
  }

  return (
    <main style={styles}>
      <form className="genre-form" onSubmit={addGenre}>
        <input type="text" placeholder="favourite Genre..." name="genre" />
        <button type="submit">Add</button>
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
        </section>
      )}
      {animeShown && <Anime genre={genre} animeShown={animeShown} />}

      <div className="anime-grid">
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </main>
  );
}

export default Main;
