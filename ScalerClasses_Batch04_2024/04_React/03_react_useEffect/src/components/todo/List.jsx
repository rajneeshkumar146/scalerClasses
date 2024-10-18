import React from 'react'

function List(listItemsProp) {
    const { listItems } = listItemsProp;
    return (
        <>
            <div className='list'>
                <ul>
                    {
                        listItems.map((item, index) => (
                            <li key={index}> {item}</li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}

export default List
