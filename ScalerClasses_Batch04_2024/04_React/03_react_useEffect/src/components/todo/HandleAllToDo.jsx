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

    const handleDeleteListItem = (idxOfItemGetDeleted) => {
        const filteredListItems = listItems.filter((listItem, cidx) =>
            cidx != idxOfItemGetDeleted
        )

        console.log("That item is going to be deleted: ", listItems[idxOfItemGetDeleted])
        setListItems(filteredListItems);
    }

    return (
        <>
            <h2>Handle All Todo</h2>
            <InputBox addListItem={addListItem}></InputBox>
            <List listItems={listItems} handleDeleteListItem={handleDeleteListItem}></List>
        </>
    )
}

export default HandleAllToDo