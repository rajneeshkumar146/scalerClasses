import React from 'react'

function List(listItemsAndEventProp) {
    const { listItems, handleDeleteListItem } = listItemsAndEventProp;
    return (
        <>
            <div className='list'>
                <ul>
                    {
                        listItems.map((item, index) => (
                            <li key={index} onClick={() => handleDeleteListItem(index)}> {item}</li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}

export default List
