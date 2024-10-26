import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

export const useMovieTrailer = (movieId) => {

    const trailerVideo = useSelector(store=> store.movies?.trailerVideo);
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const json = await data.json();
            // console.log(json);
            const filterData = json.results.filter(video => video.type == "Trailer");
            const trailer = filterData.length ? filterData[0]: json?.results[0];
            // console.log(filterData)
            // setTrailerId(trailer.key) 
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    };

    useEffect(() => {
        if (movieId) getMovieVideos();
    }, [movieId]);

  return (
    <div>useMovieTrailer</div>
  )
}
