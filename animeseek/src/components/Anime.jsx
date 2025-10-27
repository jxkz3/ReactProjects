import { useEffect, useState } from "react";
import axios from "axios";

function Anime({ genre, animeShown }) {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log(genre.join(", "));

  useEffect(() => {
    if (animeShown) {
      generateAnime();
    }
  }, [animeShown]);

  async function generateAnime() {
    setIsLoading(true);

    try {
      const prompt = `List exactly 10 of the best anime titles for the ${genre.join(
        ", "
      )} genre.
                      Only return the titles — no numbers, no bullet points,
                      no symbols, and no extra text.`;

      // call backend instead of Gemini directly
      const res = await axios.post("http://localhost:5000/api/gemini", {
        prompt,
      });

      const text =
        res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      setResponse(text);
    } catch (err) {
      console.error("Gemini API error:", err);
      setResponse("Error fetching response");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <p>
        animes {genre.join(", ")} {animeShown}
      </p>
      <h2>Best Animes in these genre</h2>
      <p>{isLoading ? "Loading..." : response} </p>
    </section>
  );
}

export default Anime;
