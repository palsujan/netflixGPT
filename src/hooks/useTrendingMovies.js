import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'

const useTrendingMovies = () => {
const dispatch = useDispatch();
const getTrendingMovies = async () =>{
    try{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?', 
            API_OPTIONS
          );
          const json = await data.json();
          console.log("getTrendingMovies",json?.results);
          if(json?.results){
            dispatch(addTrendingMovies(json?.results))
          }
    } catch (error){
        console.error("Error fetching now playing movies", error)
    }

 
};

useEffect(()=>{
  getTrendingMovies();
},[dispatch])

}

export default useTrendingMovies;