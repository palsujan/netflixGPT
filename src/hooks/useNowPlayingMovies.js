import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import  { useEffect } from 'react'

const useNowPlayingMovies = () => {
const dispatch = useDispatch();
const getNowPlayingMovies = async () =>{
    try{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
            API_OPTIONS
          );
          const json = await data.json();
          console.log("getNowPlayingMovies",json?.results);
          if(json?.results){
            dispatch(addNowPlayingMovies(json?.results))
          }
    } catch (error){
        console.error("Error fetching now playing movies", error)
    }

 
};

useEffect(()=>{
  getNowPlayingMovies();
},[dispatch])

}

export default useNowPlayingMovies;