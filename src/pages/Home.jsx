import MovieCard from '../components/MovieCard.jsx';
import React, {useState} from 'react';
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020", url: "123"},
        {id: 2, title: "Terminator", release_date: "1999", url: "123"},
        {id: 3, title: "The Matrix", release_date: "2003", url: "123"},
        {id: 4, title: "Fight Club", release_date: "2005", url: "123"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchQuery);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search_form">
                <input type="text" 
                placeholder='Search for movies...' 
                className="search_input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type='submit' className="seach_button">Search</button>
            </form>

            <div className="movies_grid">
                {movies.map(
                    (m) => 
                    /*m.title.toLowerCase().startsWith(searchQuery) && ()∂ */
                    <MovieCard movie={m} key={m.id} />
                )
                }
            </div>
        </div>
    )
}

export default Home