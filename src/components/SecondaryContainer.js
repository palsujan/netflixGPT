import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    if (!movies) return null;
  return (
    movies.nowPlayingMovies && 
    movies.popularMovies && 
    movies.upcomingMovies && 
    movies?.trendingMovies &&(
        <div className=' bg-black'>
            <div className='-mt-60 pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Trending"} movies={movies?.trendingMovies}/>
                <MovieList title={"Popular"} movies={movies?.popularMovies}/>
                <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies}/>
                <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies}/>
            </div>
        </div>
    )
  )
}

export default SecondaryContainer