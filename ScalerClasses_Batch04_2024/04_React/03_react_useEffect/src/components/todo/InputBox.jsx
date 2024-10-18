import React from 'react'
import { useState } from 'react'

function InputBox(addListItemCallBackFunctionProp) {
    const [inputeValue, setInputeValue] = useState("");

    const handleInput = (event) => {
        setInputeValue(event.target.value);
    }

    const addTaskToChild = () => {
        addListItemCallBackFunctionProp.addListItem(inputeValue);
        setInputeValue("");
    }

    return (
        <>
            <div className='inputBox'>
                <input type="text" value={inputeValue} onChange={handleInput} placeholder='Enter your message' />
                <button onClick={addTaskToChild}>Add Task</button>
            </div>
        </>
    )
}

export default InputBox
