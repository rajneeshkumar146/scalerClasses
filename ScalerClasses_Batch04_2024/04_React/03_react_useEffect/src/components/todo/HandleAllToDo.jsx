import React from 'react'
import { useState } from 'react';
import InputBox from './InputBox'
import List from './List'

function HandleAllToDo() {
    const [listItems, setListItems] = useState([]);

    const addListItem = (listItem) => {
        let newListItems = [...listItems, listItem];
        setListItems(newListItems);
    }

    return (
        <>
            <h2>HandleAllToDo</h2>
            <InputBox addListItem={addListItem}></InputBox>
            <List listItems={listItems}></List>
        </>
    )
}

export default HandleAllToDo