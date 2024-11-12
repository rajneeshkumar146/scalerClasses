import React from 'react'
import { useState, useCallback } from 'react'

function ItemList() {
    const [Items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    // const removeItem = (itemToRemove) => {
    //     setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
    // }

    const removeItem = useCallback((itemToRemove) => {
        setItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
    }, []);

    return (
        <div>
            {Items.map((item) => (
                <div key={item}>
                    {item}
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ItemList