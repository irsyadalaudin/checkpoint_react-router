import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import { movieData } from "./constants/MovieData";
import { useState } from "react";
import Add from "./components/Add";
import Filter from "./components/Filter";


const App = () => {
	const [movies, setMovies] = useState(movieData)
	const originalMovies = [...movieData]
	return (
		<div className="bg-secondary bg-gradient rounded-4 w-75 my-5 mx-auto text-white" style={{width: "1300px"}}>
			<Add movies={movies} setMovies={setMovies} />
			<Filter movies={movies} setMovies={setMovies}  originalMovies={originalMovies}/>
			<MovieList movies={movies} setMovies={setMovies} />
		</div>
	);
};

export default App;