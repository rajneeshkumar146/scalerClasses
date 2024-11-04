import userSlice from "../userSlice";

const actions = userSlice.actions;
export const fetchUserMiddlWare = (param) => {
    return async function (dispatch) {
        try {
            dispatch(actions.setUserLoading());
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
            const userRes = await resp.json();

            console.log("userRes: ", userRes);
            dispatch(actions.setUserData(userRes));
        } catch (err) {
            dispatch(actions.setError());
        }
    }
};