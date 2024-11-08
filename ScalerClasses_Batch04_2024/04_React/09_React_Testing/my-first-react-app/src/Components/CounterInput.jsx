import React, { useState } from "react";
function InputCounter() {
    const [count, changeCount] = useState(0);
    const [value, setValue] = useState("");
    const increment = () => {
        changeCount(count + 1);
    }
    const decrement = () => {
        changeCount(count - 1);
    }
    const updateInput = (e) => {
        setValue(e.target.value);
    }
    const resetCounter = () => {
        changeCount(Number(value));
        setValue("");
    }
    return (
        <div className="container">
            <div className="container">
                <input type="number" value={value} onChange={updateInput} />
                <button onClick={resetCounter}>Reset</button>
            </div>
            <br />
            <div className="container">
                <button onClick={increment}>+</button>
                <p>Counter Number  Count :  {count}</p>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}


/**
 * Testing.
 * 0. Intial State of app.
 * 1. Input value is always a number.
 * 2. Input value can be -ve/+ve.
 * 3. Count increment 2 times.
 * 4. Count decrement 2 times.
 * 5. Reset count.
 * 6. Snapshot of app.
 */
export default InputCounter
