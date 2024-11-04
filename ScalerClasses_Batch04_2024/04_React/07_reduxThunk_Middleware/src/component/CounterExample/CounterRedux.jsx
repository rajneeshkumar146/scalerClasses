import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../../redux/counterSlice'

function CounterRedux() {
    const count = useSelector((store) => {
        // 'counterState' is the name of that slice refrence at store level. which may or may not be diferent from slice name.
        return store.counterState.count;
    })

    // This will update the action of user to the store and let the owner aware about the changes.
    const actions = counterSlice.actions;
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(actions.increment());
    }

    const handleDecrement = () => {
        dispatch(actions.decrement());
    }

    return (
        <>
            <button onClick={handleIncrement}>+</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>-</button>

        </>
    )
}

export default CounterRedux