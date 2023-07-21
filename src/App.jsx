import { Routes, Route } from "react-router-dom"
import { movieData } from "./constants/MovieData"
import { useState } from "react"
import Home from "./page/Home"
import Description from "./page/Description"

const App = () => {
	const [movies, setMovies] = useState(movieData)
	const [filmDesc, setFilmDesc] = useState("")

	return (
			<Routes>
				<Route path="/" element={<Home setFilmDesc={setFilmDesc} />} /> 
				<Route path="/Description" element={<Description movies={movies} setMovies={setMovies} filmDesc={filmDesc} />} />
			</Routes>
	)
}

export default App