import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieListType } from "../utils/types";

const initialState: MovieListType = {};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getMovieListPending(state) {
      state.loading = true;
      state.error = null;
    },
    getMovieListSuccess(state, action: PayloadAction<MovieListType>) {
      state.loading = false;
      state.list = action.payload;
    },
    getMovieListFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getMovieListPending, getMovieListSuccess, getMovieListFailure } =
  movieSlice.actions;

export default movieSlice.reducer;
