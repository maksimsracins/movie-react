import {useParams} from 'react-router-dom';

function MoviePage(){

    const {id} = useParams();
    return (
        <>
        <div className="movie_page">
            <p>{id}</p>
        </div>
        </>
    )
}

export default MoviePage;