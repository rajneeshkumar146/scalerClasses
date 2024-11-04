import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../redux/userSlice';

function UserRedux() {
    const { loading, error, user, param } = useSelector((store) => {
        return store.userState;
    });

    const dispatch = useDispatch();
    const actions = userSlice.actions;

    const [value, setValue] = useState(1);

    useEffect(() => {
        (async function () {
            try {
                dispatch(actions.setUserLoading());
                const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${param}`);
                const userRes = await resp.json();

                console.log("userRes: ", userRes);
                dispatch(actions.setUserData(userRes));
            } catch (err) {
                dispatch(actions.setError());
            }
        })();
    }, [param]);

    const handleParams = () => {
        dispatch(actions.setParam(value));
    }

    const heading = <>
        <h2> User Example</h2>
        <input
            type="text"
            value={value}
            onChange={(e) => { setValue(e.target.value) }}>
        </input>
        <button onClick={handleParams}> Send Params</button>
    </>

    if (loading) {
        return <>
            {heading}
            <h3>...Loading</h3>
        </>
    }

    if (error) {
        return <>
            {heading}
            <h3>Error occcured</h3>
        </>
    }

    return (
        <>
            {heading}
            <h4> Name : {user.name} </h4>
            <h4> Phone : {user.phone} </h4>
        </>
    )
}

export default UserRedux