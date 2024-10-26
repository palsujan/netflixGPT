import React from 'react'
import MovieCard from './MovieCard'

export const MovieList = ({title, movies}) => {
    console.log("movies",movies[0]?.poster_path)
  return (
    <div className='px-6 bg-black'>
        <h1 className='text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex '>
                {movies.map((movie)=> <MovieCard key={movie.id} posterPath= {movie?.poster_path}/>)}
                
            </div>
        </div>
    </div>
  )
}
