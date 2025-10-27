import { useState } from "react";
import axios from "axios";

function Anime() {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function generateAnime() {
    setIsLoading(true);
    try {
      const prompt =
        "Recommend 5 popular anime TITLE , DONT GIVE ME ANYTHING ELSE ONLY TITLES for fantasy and Adventure genres";

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
      <h2>Best Animes in these genre</h2>
      <button onClick={generateAnime}>Generate </button>
      <p>{isLoading ? "Loading..." : response} </p>
    </section>
  );
}

export default Anime;
