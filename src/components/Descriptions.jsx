import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const Descriptions = ({ movies , filmDesc }) => {
    const [movie] = movies.filter((movie) => movie.title === filmDesc)
    console.log(movie)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/")
    }

    return (
        <div className="d-flex flex-wrap justify-content-center" style={{width: "1370px"}}>   
            <div className="text-center">
                <iframe width="560" height="315" src={movie.trailerURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>{movie.rating}</p>
                <button onClick={handleBack}>Go Back</button>
            </div>
        </div>
    )
}

export default Descriptions;