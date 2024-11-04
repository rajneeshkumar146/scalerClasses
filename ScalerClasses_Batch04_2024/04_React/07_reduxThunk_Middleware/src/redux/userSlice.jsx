import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "userSliceDeclartion",
    initialState: {
        user: null,
        isError: false,
        isLoading: true,
        param: null,
        value: null,
    },
    reducers: {
        setUserLoading: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        setError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        setUserData: (state, componentInfoObj) => {
            state.isLoading = false;
            state.isError = false;

            state.user = componentInfoObj.payload;
        },
        setParam: (state, componentInfoObj) => {
            state.param = componentInfoObj.payload;
        },
        setValue: (state, componentInfoObj) => {
            state.value = componentInfoObj.payload;
        },
    }
});

export default userSlice;