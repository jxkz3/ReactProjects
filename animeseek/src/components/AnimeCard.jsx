function AnimeCard({ title }) {
  return (
    <div className="anime-card">
      <h3>{title || "Naruto Shippuden"}</h3>

      <img
        src="https://cdn.myanimelist.net/images/anime/5/17407.jpg"
        alt={title || "Naruto Shippuden"}
      />

      <div className="anime-meta">
        <span>2022</span>
        <span>⭐ 5.0</span>
      </div>

      <p>
        <i>Description:</i> Best anime I ever watched — the fights, characters,
        and story are incredible!
      </p>
    </div>
  );
}

export default AnimeCard;
