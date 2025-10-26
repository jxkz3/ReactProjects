import { useState } from "react";
import axios from "axios";

function Anime() {
  const [response, setResponse] = useState();

  async function generateAnime() {
    try {
      const prompt =
        "Recommend 5 popular anime  TITLE , DONT GIVE ME ANYTHING ELSE ONLY TILTES for Action and Adventure genres";
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        }
      );

      const text =
        res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
      setResponse(text);
    } catch (err) {
      console.error("Gemini API error:", err);
      setResponse("Error fetching response");
    } finally {
    }
  }

  return (
    <section>
      <h2>Best Animes in these genre</h2>
      <button onClick={generateAnime}>Generate </button>
      <p> Loading...{response}</p>
    </section>
  );
}

export default Anime;
