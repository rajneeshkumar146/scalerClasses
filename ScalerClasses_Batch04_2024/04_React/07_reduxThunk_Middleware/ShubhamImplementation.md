// Name: Shubham Yadav
// Context: redux user middleware Code


// UserRedux.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserRedux() {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((store) => store.userState);

    const [param, setParam] = useState('');

    const handleInputChange = (e) => {
        setParam(e.target.value);
    };

    const handleFetchUserBtnClick = () => {
        dispatch({ type: 'fetchUser', payload: { param } })
    }

    return (
        <div>
            <input
                type="number"
                value={param}
                onChange={handleInputChange}
                placeholder="Enter user ID"
            />
            <button onClick={handleFetchUserBtnClick}>
                Fetch User
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
    );
}

export default UserRedux;



// userMiddleware.jsx
import userSlice from "../redux/userSlice";

const userMiddleware = (store) => (next) => async (action) => {
    const { dispatch } = store;
    if (action.type === 'fetchUser') {
        const { param } = action.payload ?? {};
        dispatch(userSlice.actions.setLoading(true));
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`); 
            const data = await response.json();
            dispatch(userSlice.actions.setUser(data));
        } catch (error) {
            dispatch(userSlice.actions.setError(error.message));
        }
    }
    return next(action);
};

export default userMiddleware;




// userSlice.js
import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: "userName",
    initialState: {
        loading: false,
        error: null,
        user: null,
        param: null
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.error = null;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setParam: (state, action) => {
            state.param = action.payload;
        }
    }
});

export default userSlice;



//store.js

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoSlice from "./todoSlice";
import userMiddleware from "../middlewares/userMiddleware";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
        todoState: todoSlice.reducer,
        userState: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userMiddleware)
});


export default store;
