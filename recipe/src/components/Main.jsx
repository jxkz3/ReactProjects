import List from "./List.jsx";
import React, { useState } from "react";

function Main({ darkMode }) {
  const [genre, setGenre] = useState([]);

  function addGenre(formData) {
    const newGenre = formData.get("genre");
    setGenre((g) => [...g, newGenre]);
  }

  return (
    <main>
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
              <button>Get Animes</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default Main;
