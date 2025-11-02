import { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "./AnimeCard";

function Anime({ genre, animeShown }) {
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (animeShown) {
      generateAnime();
    }
  }, [animeShown]);

  async function generateAnime() {
    setIsLoading(true);
    setError("");

    try {
      const prompt = `List exactly 10 of the best anime titles for the ${genre.join(
        ", "
      )} genre. Only return the titles — no numbers, no bullet points, no symbols, and no extra text.`;

      // Backend request
      const res = await axios.post("http://localhost:5000/api/gemini", {
        prompt,
      });

      const text =
        res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      // Cleanly split and filter titles
      const splitTitles = text
        .split(/\n|,/)
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      setTitles(splitTitles);
    } catch (err) {
      console.error("Gemini API error:", err);
      setError("Error fetching response");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <h2>Best Animes in these genres</h2>
      {animeShown && <p>Genres: {genre.join(", ")}</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div>
          {titles.map((title, index) => (
            <AnimeCard key={index} title={title} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Anime;
