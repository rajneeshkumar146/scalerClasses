import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCounter] = useState(0);

    return (
        <>
            <button onClick={() => {
                setCounter(count + 1);
            }}>+</button>

            <h3>{count}</h3>
            
            <button onClick={() => {
                setCounter(count - 1);
            }}>-</button>

        </>
    )
}

export default Counter