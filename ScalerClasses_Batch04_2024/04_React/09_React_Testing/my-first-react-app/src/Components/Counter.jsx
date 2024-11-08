import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='container'>
            <button onClick={increment}>+</button>
            <p>Count: {count}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter