import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "userSliceDeclartion",
    initialState: {
        user: null,
        error: false,
        loading: true,
        param: null
    },
    reducers: {
        setUserLoading: (state) => {
            state.loading = true;
            state.error = false;
        },
        setError: (state) => {
            state.loading = false;
            state.error = true;
        },
        setUserData: (state, componentInfoObj) => {
            state.loading = false;
            state.error = false;

            state.user = componentInfoObj.payload;
        },
        setParam: (state, componentInfoObj) => {
            state.param = componentInfoObj.payload;
        }
    }
});

export default userSlice;