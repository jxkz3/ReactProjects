import { useEffect, useState } from "react";

const cache = {};
let fetchQueue = Promise.resolve(); // global queue

// helper: queued fetch with delay (2.5s between each call)
async function queuedFetch(url) {
  const result = await (fetchQueue = fetchQueue.then(async () => {
    await new Promise((r) => setTimeout(r, 2500));
    return fetch(url);
  }));
  return result;
}

function AnimeCard({ title }) {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title) return;
    let isCancelled = false;

    const fetchAnime = async () => {
      if (cache[title]) {
        setAnimeData(cache[title]);
        return;
      }

      setLoading(true);

      try {
        const res = await queuedFetch(
          `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
            title
          )}&limit=5`
        );
        const data = await res.json();

        if (!isCancelled) {
          if (data.data?.length) {
            // find best matching title
            const cleaned = title.toLowerCase().replace(/[^\w\s]/g, "");
            const match =
              data.data.find((a) => {
                const t1 = a.title.toLowerCase().replace(/[^\w\s]/g, "");
                const t2 = a.title_english
                  ? a.title_english.toLowerCase().replace(/[^\w\s]/g, "")
                  : "";
                return t1.includes(cleaned) || t2.includes(cleaned);
              }) || data.data[0];

            cache[title] = match;
            setAnimeData(match);
          } else {
            setAnimeData(null);
          }
        }
      } catch (err) {
        console.error("Error fetching anime:", err);
        if (!isCancelled) setAnimeData(null);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    fetchAnime();
    return () => {
      isCancelled = true;
    };
  }, [title]);

  if (loading) return <div className="anime-card">Loading {title}...</div>;
  if (!animeData)
    return <div className="anime-card">No data found for "{title}"</div>;

  return (
    <div className="anime-card">
      <h3>{animeData.title}</h3>
      <img
        src={animeData.images?.jpg?.image_url || "/fallback.jpg"}
        alt={animeData.title}
        width="200"
        onError={(e) => (e.target.src = "/fallback.jpg")}
      />
      <div className="anime-meta">
        <span>⭐ {animeData.score || "N/A"}</span>
        <span>📺 {animeData.episodes || "?"} eps</span>
      </div>
      <p>
        <i>Description:</i>{" "}
        {animeData.synopsis
          ? animeData.synopsis.slice(0, 150) + "..."
          : "No description available."}
      </p>
    </div>
  );
}

export default AnimeCard;
