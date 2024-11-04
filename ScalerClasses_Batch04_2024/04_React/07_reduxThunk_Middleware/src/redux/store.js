import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";


// Redux have there own middleware which called by default. Here I'm trying to demonstrate a 
// example to create a custome middlware hook. 
import { applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        userState: userSlice.reducer,
    }
}, applyMiddleware(thunk));

export default store;