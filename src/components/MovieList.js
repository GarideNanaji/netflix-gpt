import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title,movies}) => {
  
    // if (!movies.length) return null;
  return (
    <div className=''>
         <h1 className='text-lg font-bold p-3 text-white'>{title}</h1>
       <div className='flex overflow-x-scroll'>
           
            <div className='flex'>
            {movies.map((movie) => (
          <MovieCard key={movie.id} poster_path={movie.poster_path} />
        ))}
            </div>
        </div>
      
    </div>
  )
}

export default MovieList