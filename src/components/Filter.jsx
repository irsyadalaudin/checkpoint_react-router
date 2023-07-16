import { useState } from "react";

/* eslint-disable react/prop-types */
const Filter = ({movies, setMovies, originalMovies}) => {
    const [isfiltered, setIsfiltered] = useState(false);

    const sortByTitle = () => {
        const sortedTitle = [...movies];
        sortedTitle.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        setMovies(sortedTitle)
        setIsfiltered(true);
    }

    const unsortByTitle = ()=>{
        setMovies(originalMovies)
        setIsfiltered(false);
    }

    /* */
    const sortByRating = () => {
        const sortedRating = [...movies];
        sortedRating.sort((b, a) => Number(a.rating) - Number(b.rating))
        setMovies(sortedRating)
        setIsfiltered(true)
    }

    const unsortByRating = () => {
        setMovies(originalMovies)
        setIsfiltered(false)
    }

    return (
        <div className="d-flex justify-content-center mt-2 mb-4">
            <button className="rounded-0 rounded-start-3" onClick={isfiltered ? unsortByTitle : sortByTitle}>Filter By Title</button>
            <button className="rounded-0 rounded-end-3"onClick={isfiltered ? unsortByRating : sortByRating}>Filter By Rating</button>
        </div>
    );
};

export default Filter;