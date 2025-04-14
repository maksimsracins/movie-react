 import {createContext, useState, useContext, useEffect} from 'react'
 import { useLocalStorage } from "@uidotdev/usehooks";

 const MovieContext = createContext();

 export const useMovieContext = () => useContext(MovieContext);

 export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const [watchedMovies, setWatchedMovies] = useLocalStorage('watched', []);

    // useEffect(() => {
    //     const storedFavs = localStorage.getItem('favorites');
    //          setFavorites(JSON.parse(storedFavs));
    // }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(watchedMovies))
    }, [watchedMovies])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const addToWatched = (movie) => {
        setWatchedMovies(prev => [...prev, movie]);
    }

    const removeFromWatched = (movieId) => {
        setWatchedMovies(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isWatched = (movieId) => {
        return watchedMovies?.some(movie => movie.id === movieId);
    }


    const isFavorite = (movieId) => {
        return favorites?.some(movie => movie.id === movieId);
    }
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        watchedMovies,
        addToWatched,
        removeFromWatched,
        isWatched,
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
 }