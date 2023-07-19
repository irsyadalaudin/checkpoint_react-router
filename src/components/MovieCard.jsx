import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const MovieCard = ( {title, description, posterURL, rating} ) => {
    const navigate = useNavigate()

    const handleMovieClick = () => {
        navigate(`/Description/${(title)}`);
    };

    return (
        <div onClick={handleMovieClick} className="border text-center" style={{width: "227px", cursor: "pointer"}}>
            <img src={posterURL} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    )
}

export default MovieCard;