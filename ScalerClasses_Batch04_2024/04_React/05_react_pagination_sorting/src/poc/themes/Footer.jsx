import React from 'react'
import { useContext } from 'react';
import "./themeManager.css"
import {ThemeWrapper} from "./ThemeManager"

function Footer() {
    return (
        <div style={{ border: "1px solid", padding: "1rem", margin: "1rem" }}>
            <div>Footer</div>
            <div>⬇</div>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <div>-------------------------------------</div>
        </div>
    )
}

function Option() {
    const { currTheme } = useContext(ThemeWrapper);
    return <div className={currTheme}>Option</div>
}

export default Footer