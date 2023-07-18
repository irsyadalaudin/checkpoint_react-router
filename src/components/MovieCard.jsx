import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const MovieCard = ( {title, description, posterURL, rating} ) => {
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate ("/Film")} className="border text-center" style={{width: "227px", cursor: "pointer"}}>
            <img src={posterURL} alt="image"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    );
};

export default MovieCard;