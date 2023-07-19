import { useLocation } from "react-router-dom";

const Description = () => {
    const location = useLocation()
    const { title, description, posterURL, rating } = location.state

    return (
        <>
            <img src={posterURL} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{rating}</p>
        </>
    )
}

export default Description;