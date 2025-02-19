import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailor } from "../utilities/moviesSlice";
import { API_OPTIONS } from "../utilities/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMainMovieVideo = async () => {
        try {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
                API_OPTIONS
            );
            const json = await data.json();

            const filteredData = json.results.filter((video) => video.type === "Trailer");

            const trailer = filteredData.length ? filteredData[0] : json.results[0];

            dispatch(addMovieTrailor(trailer));
        } catch (error) {
            console.error("Error fetching movie trailer:", error);
        }
    };

    useEffect(() => {
        getMainMovieVideo();
    }, []);

    return null; // or JSX if you want to display something
};

export default useMovieTrailer;
