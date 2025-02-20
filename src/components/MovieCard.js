import React from 'react'
import { IMG_CDN_URL } from '../utilities/constants'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-52 px-3'>
        
        <img alt='movie-poster' src={IMG_CDN_URL+poster_path} />
      
    </div>
  )
}

export default MovieCard
