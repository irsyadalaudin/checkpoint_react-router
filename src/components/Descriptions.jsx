/* eslint-disable react/prop-types */
const Descriptions = ({ movies , filmDesc }) => {
    const [movie] = movies.filter((movie) => movie.title === filmDesc)
    console.log(movie)

    return (
        <div className="d-flex flex-wrap justify-content-center" style={{width: "1500px"}}>   
            <div className="text-center">
                <img src={movie.descURL} alt={movie.title}/>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>{movie.rating}</p>
            </div>
        </div>
    )
}

export default Descriptions;