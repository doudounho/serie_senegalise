import React from 'react';
import MovieCard from './MovieCard';
import {movie} from '../Movie.js';


const MovieList = () => {
    return (
        <div className='container'>
            {movie.map((movie)=><MovieCard Title={movie.Title} Rating={movie.Rating} Description={movie.Description} PostUrl={movie.PostUrl} />)}
        </div>
    )
}

export default MovieList;