import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'

const useUpcomingMovies = () => {
const dispatch = useDispatch();
const getUpcomingMovies = async () =>{
    try{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', 
            API_OPTIONS
          );
          const json = await data.json();
          console.log("getUpcomingMovies",json?.results);
          if(json?.results){
            dispatch(addUpcomingMovies(json?.results))
          }
    } catch (error){
        console.error("Error fetching now playing movies", error)
    }

 
};

useEffect(()=>{
    getUpcomingMovies();
},[dispatch])

}

export default useUpcomingMovies;