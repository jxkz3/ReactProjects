function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.item.img.src} alt={props.item.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src="/mapicon.png" alt="map marker icon" />

        <span className="country">{props.item.country}</span>
        <a href={props.item.googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.item.title}</h2>
        <p className="trip-dates">{props.item.date}</p>
        <p className="entry-text">{props.item.text}</p>
      </div>
    </article>
  );
}

export default Entry;
