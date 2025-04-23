import MovieCard from '../components/MovieCard.jsx';
import React, {useState, useEffect} from 'react';
import {searchMovies, getPopularMovies, getGenres} from "../services/api.js";
import "../css/Home.css"
//TODO: when search is used, movies array is overriden
//TODO: check default amount of loaded movies. Why so less?!
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [genres, setGenres] = useState([]);

    useEffect(() => {

        const loadGenres = async () => {
            try{
                const genres = await getGenres();
                setGenres(genres);
                console.log(genres)
            }catch(err){
                setError("Failed to load genres...")
            }finally{
                setLoading(false);
            }
        }
        loadGenres();
    },[]);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                console.log(popularMovies);
            }catch(err){
                console.log(err);
                setError("Failed to load movies...")
            }finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[]);

    const handleFilteredMovies = (id) => { 
        console.log("ID:" + id);
        setFilteredMovies(
            movies.filter(movie => movie.genre_ids.includes(id))
        );
        console.log(filteredMovies)
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true);

        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }catch(err){
            console.log(err);
            setError("Failed to search movies...")
        }finally{
            setLoading(false);
        }

    }

    return ( 
        <div className="home">
            <div className="actions">
                <ul className="actions_ul">
                    {genres.map(
                        (gen) => <li className="genre_list" key={gen.id} onClick={() => {
                            handleFilteredMovies(gen.id)
                        }}> <button>{gen.name}</button></li>
                    )}
                </ul>
                <form onSubmit={handleSearch} className="search_form">
                    <input type="text" 
                    placeholder='Search for movies...' 
                    className="search_input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type='submit' className="seach_button">Search</button>
                </form>
                </div>

            {loading ? <div className="loading">Loading... </div> : <div className="movies_grid">
                {
                filteredMovies.length === 0 ? 
                movies.map((m) => <MovieCard movie={m} key={m.id} />) 
                    : filteredMovies.map((m) => <MovieCard movie={m} key={m.id} />)
                }
            </div>
            }
            
        </div>
    )
}

export default Home