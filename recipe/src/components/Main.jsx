import List from "./List.jsx";
import React, { useState } from "react";

function Main() {
  const [genre, setGenre] = useState([]);

  function addGenre(formData) {
    const newGenre = formData.get("genre");
    setGenre((g) => [...g, newGenre]);
  }

  function genreHeading() {
    return genre.length > 0 ? "genre on Hand" : null;
  }

  return (
    <main>
      <form className="genre-form" action={addGenre}>
        <input type="text" placeholder="favourite Genre..." name="genre" />
        <button>Add</button>
      </form>
      <section>
        <h2>{genreHeading()}</h2>
        <List best={genre} />
      </section>
    </main>
  );
}

export default Main;
