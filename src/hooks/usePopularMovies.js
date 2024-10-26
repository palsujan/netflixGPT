import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'

const usePopularMovies = () => {
const dispatch = useDispatch();
const getPopularMovies = async () =>{
    try{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
            API_OPTIONS
          );
          const json = await data.json();
          console.log("getNowPlayingMovies",json?.results);
          if(json?.results){
            dispatch(addPopularMovies(json?.results))
          }
    } catch (error){
        console.error("Error fetching now playing movies", error)
    }

 
};

useEffect(()=>{
    getPopularMovies();
},[dispatch])

}

export default usePopularMovies;