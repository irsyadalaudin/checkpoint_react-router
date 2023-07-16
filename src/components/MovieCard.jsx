/* eslint-disable react/prop-types */
const MovieCard = ( {title, description, posterURL, rating} ) => {
    return (
        <div className="border text-center" style={{width: "227px"}}>
            <img src={posterURL} alt="image"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    );
};

export default MovieCard;