import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
    const {favorites} = useMovieContext();

    if (favorites){
       return(
        <div className="favorites">
<h2>Your Favorites</h2>
        <div className="movies_grid">
                {favorites.map(
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
            <h2>No Favorite Movies yet</h2>
            <p>Start adding favs</p>
        </div>
    )
}
export default Favorites