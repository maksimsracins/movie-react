import "../css/MovieCard.css"

function MovieCard({movie}){

    function onFavoriteClick(){
        alert('clicked')
    }

    return (
        <div className="movie_card">
            <div className="movie_poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie_overlay">
                    <button className="favorite_btn" onClick={onFavoriteClick}>♥</button>
                </div>
            </div>
            <div className="movie_info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )

}

export default MovieCard