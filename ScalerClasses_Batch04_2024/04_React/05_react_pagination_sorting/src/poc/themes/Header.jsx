import React from 'react'

function Header() {
    return (
        <div style={{ border: "1px solid", padding: "1rem", margin: "1rem" }}>
            <div>Header</div>
            <div>⬇</div>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <div>-------------------------------------</div>
        </div>
    )
}

function Option(){
    return <div>Option</div>
}


export default Header