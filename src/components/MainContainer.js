import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector(store => store.movies.nowPlayingMovies) || [];

  if (movies.length === 0) {
      return <p>Loading movies...</p>; 
  }

  const mainMovie = movies[0];

  //console.log("Main Movie:", mainMovie); 

  if (!mainMovie) return <p>No movie available</p>; 

  const { original_title, overview, id } = mainMovie;

  return (
      <div>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
      </div>
  );
};

export default MainContainer;
