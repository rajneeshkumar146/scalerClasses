import React from 'react'
import { useState } from 'react'

function AddTask_betterVersion() {
    const [taskArr, setTasks] = useState([]);

    const addTask = (inputValue) => {
        if (inputValue != "") {
            let newTaskArr = [...taskArr, inputValue];
            setTasks(newTaskArr);
        }
    }

    return (
        <div>
            <InputBox addTask={addTask}></InputBox>
            <List taskArr={taskArr}></List>
        </div>
    )
}

function InputBox(props) {
    const [inputValue, setInputValue] = useState("");

    const handleUserInput = (event) => {
        setInputValue(event.target.value);
    }

    const addTaskToChild = () => {
        props.addTask(inputValue);
        setInputValue("");
    }

    return (
        <div className='inputBox'>
            <input type="text" value={inputValue} onChange={handleUserInput} placeholder="Enter your message."></input>
            <button onClick={addTaskToChild}>Add Task</button>
        </div>
    );
}

function List(props) {
    return (
        <div className='list'>
            <ul>
                {
                    props.taskArr.map((task, index) => <li key={index}>{task}</li>)
                }
            </ul>

        </div>
    )
}

export default AddTask_betterVersion
