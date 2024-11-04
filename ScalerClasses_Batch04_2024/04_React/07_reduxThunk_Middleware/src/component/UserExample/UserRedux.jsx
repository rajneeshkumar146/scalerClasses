import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserMiddlWare } from '../../redux/middleware/userMiddleWare';
import userSlice from '../../redux/userSlice'


function UserRedux() {

    const actions = userSlice.actions;
    const dispatch = useDispatch();

    const { user, isError, isLoading, param, value } = useSelector((store) => {
        return store.userState;
    });

    useEffect(() => {
        if (param != null) {
            dispatch(fetchUserMiddlWare(param));
        }
    }, [param]);

    const handleParams = () => {
        dispatch(actions.setParam(value));
    }

    const heading = <>
        <h2> User Example</h2>
        <input
            type="text"
            value={value}
            onChange={(event) =>
                dispatch(actions.setValue(event.target.value))}>
        </input>
        <button onClick={handleParams}> Send Params</button>
    </>

    if (isLoading) {
        return <>
            {heading}
            <h3>...Loading</h3>
        </>
    }

    if (isError) {
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