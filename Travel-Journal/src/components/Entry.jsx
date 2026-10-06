export default function Entry(props) {
    return (
        <>
            <article className="journal-entry">
                <div className="image-container">
                    <img className="main-image" src={props.img} alt={props.title} />
                </div>
                <div className="info-container">
                    <img className="marker" src="../images/marker.png" alt="mark icon" />
                    <span className="country">{props.location}</span>
                    <a href={props.link} className="map-link" target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                    </a>
                    
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="trip-date">{props.date}</p>
                    <p className="entry-text">
                        {props.text}
                    </p>
                </div>
            </article>
        </>
    )
}