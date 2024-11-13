import {configureStore} from '@reduxjs/toolkit';
import PaginationSlice from "./PaginationSlice";
import MovieSlice from "./Movie/MovieSlice";

const store = configureStore({
    reducer:{
        paginationState:PaginationSlice.reducer,
        moviesState:MovieSlice.reducer
    }
});

export default store;