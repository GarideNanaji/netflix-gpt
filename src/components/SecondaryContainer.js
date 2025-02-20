import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-60 relative pl-8'>
      <MovieList title="Now Playing Movies" movies ={movies.nowPlayingMovies} />
      <MovieList title="Top Rated Movies" movies ={movies.topRatedMovies} />
      <MovieList title="Pupular Movies" movies ={movies.popularMovies} />
      <MovieList title="Upcoming Movies" movies ={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
