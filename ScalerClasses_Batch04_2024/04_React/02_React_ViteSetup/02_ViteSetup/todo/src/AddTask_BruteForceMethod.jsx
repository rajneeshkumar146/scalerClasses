import React, { useState } from 'react'


function AddTask_BruteForceMethod() {
    const [inputValue, setInputValue] = useState("");
    const [taskArr, setTasks] = useState([]);

    const handleUserInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTask = () => {
        const newTask = inputValue;
        let newTaskArr = [...taskArr, newTask];
        setTasks(newTaskArr);
        setInputValue("");
    }

    return (
        <>
            <div className='inputBox'>
                <input type="text" value={inputValue} onChange={handleUserInput} placeholder="Enter your task"></input>
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className='list'>
                <ul>
                    {
                        taskArr.map((task, index) => <li key={index}>{task}</li>)
                    }
                </ul>
            </div>

        </>
    )
}

export default AddTask_BruteForceMethod