import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie, onClick}){

    const {
        favorites, 
        isFavorite, 
        addToFavorites, 
        removeFromFavorites, 
        watchedMovies, 
        isWatched, 
        addToWatched, 
        removeFromWatched} = useMovieContext();
    
    const favorite = isFavorite(movie.id);
    const watched = isWatched(movie.id)

    function onFavoriteClick(e){
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    function onWatchedClick(e){
        e.preventDefault();
        if (watched) return removeFromWatched(movie.id);
        else addToWatched(movie);
    }

    return (
        <div className="movie_card" onClick={onClick}>
            <div className="movie_poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie_overlay">
                    <button className={`favorite_btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
                    <button className={`watched_btn ${watched ? "active" : ""}`} onClick={onWatchedClick}>Watched</button>
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