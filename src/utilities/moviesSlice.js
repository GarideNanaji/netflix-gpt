import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
      nowPlayingMovies: null,
      movieTrailor: null
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailor:(state,action) =>{
            state.movieTrailor = action.payload;
        },
        
    },
});
export const {addNowPlayingMovies,addMovieTrailor} = moviesSlice.actions;
export default moviesSlice.reducer;