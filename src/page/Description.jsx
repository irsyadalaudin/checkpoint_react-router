/* eslint-disable react/prop-types */
import { movieData } from "../constants/MovieData"
import { useState } from "react"
import Descriptions from "../components/Descriptions";

const Description = ({ filmDesc }) => {
	const [movies, setMovies] = useState(movieData)
    
    return (
            <Descriptions movies={movies} setMovies={setMovies} filmDesc={filmDesc} />
    )
}

export default Description;