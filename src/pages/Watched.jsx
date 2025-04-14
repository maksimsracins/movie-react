import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Watched(){
    const {watchedMovies} = useMovieContext();

    if (watchedMovies){
       return(
        <div className="watched">
            <h2>Your Watched</h2>
            <div className="movies_grid">
                {watchedMovies.map(
                    (m) => 
                        /*m.title.toLowerCase().startsWith(searchQuery) && ()∂ */
                    <MovieCard movie={m} key={m.id} />
                )
            }
            </div>
            </div>
       ) 
    }

    return (
        <div className="favorites_empty">
            <h2>No Watched Movies yet</h2>
            <p>Start adding watched</p>
        </div>
    )
}
export default Watched