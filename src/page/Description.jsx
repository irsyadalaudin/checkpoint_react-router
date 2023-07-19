import { movieData } from "../constants/MovieData"
import { useState } from "react"
import Descriptions from "../components/Descriptions";

const Description = () => {
	const [movies, setMovies] = useState(movieData)
    
    return (
            <Descriptions movies={movies} setMovies={setMovies} />
    )
}

export default Description;