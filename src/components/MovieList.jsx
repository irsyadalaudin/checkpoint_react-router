/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard"

const MovieList = ({ movies, setFilmDesc }) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {movies.map((movie) => (
                <MovieCard key={movie.title} {...movie} setFilmDesc={setFilmDesc} />
            ))}
        </div>
    );
};

export default MovieList