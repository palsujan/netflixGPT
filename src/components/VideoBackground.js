// import React, { useEffect } from 'react';
// import { API_OPTIONS } from '../utils/constants';
import { useSelector } from 'react-redux';
import { useMovieTrailer } from '../hooks/useMovieTrailer';
// import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({ movieId }) => {
    // const [trailerId, setTrailerId ] = useState(second)
    // Fetch trailer video
    const trailerVideo = useSelector(store=> store.movies?.trailerVideo);
    // const dispatch = useDispatch();
    // const getMovieVideos = async () => {
    //     try {
    //         const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    //         const json = await data.json();
    //         console.log(json);
    //         const filterData = json.results.filter(video => video.type == "Trailer");
    //         const trailer = filterData.length ? filterData[0]: json?.results[0];
    //         console.log(filterData)
    //         // setTrailerId(trailer.key) 
    //         dispatch(addTrailerVideo(trailer));
    //     } catch (error) {
    //         console.error("Error fetching movie videos:", error);
    //     }
    // };

    // useEffect(() => {
    //     if (movieId) getMovieVideos();
    // }, [movieId]);
    useMovieTrailer(movieId);
    return (
        <div className='w-screen'>
            <iframe 
                className='w-screen aspect-video'
                src= {
                    "https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"
                } 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
            </iframe>
        </div>
    );
};

export default VideoBackground;
