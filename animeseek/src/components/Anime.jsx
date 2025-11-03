import { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "./AnimeCard";

function Anime({ genre, animeShown, animeSection }) {
  const [titles, setTitles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Scroll to this section when Anime mounts (once)
  useEffect(() => {
    animeSection.current.scrollIntoView({ behavior: "smooth" });
  }, [isLoading]);

  // Fetch new anime titles each time "Get Animes" is toggled on
  useEffect(() => {
    if (animeShown) generateAnime();
  }, [animeShown]);

  async function generateAnime() {
    setIsLoading(true);
    setError("");

    try {
      const prompt = `List exactly 3 of the best anime titles for the ${genre.join(
        ", "
      )} genre. Only return the titles — no numbers, no bullet points, and no extra text.`;

      const res = await axios.post("http://localhost:5000/api/gemini", {
        prompt,
      });
      const text = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "";

      const splitTitles = text
        .split(/\n|,/)
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      setTitles(splitTitles);
    } catch (err) {
      console.error("Gemini API error:", err);
      setError("Error fetching AI response.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <h2>Best Animes in these genres</h2>
      {animeShown && (
        <h3 ref={animeSection} className="genre-show">
          {genre.join(", ")}
        </h3>
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <div className="anime-grid">
          {titles.map((title) => (
            <AnimeCard key={title} title={title} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Anime;
