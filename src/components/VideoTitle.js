import React from 'react'

const VideoTitle = ({title,overview}) => {
    
  return (
    <div className='p-12 py-96  absolute bg-gradient-to-r from-black w-screen aspect-video text-white'>

        <h1 className='p-2 font-bold text-xl'>{title}</h1>
        <p className='p-2 w-1/3'>{overview}</p>
        <div className='p-2 '>
            <button className='p-3 bg-gray-600 text-white rounded-xl hover:opacity-50'>▶️ Play</button>
            <button className='p-3 mx-2 bg-white rounded-xl text-black hover:opacity-50'>ℹ️ More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
