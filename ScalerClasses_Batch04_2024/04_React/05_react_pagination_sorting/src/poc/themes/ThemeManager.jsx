import React from 'react'
import Article from './Article'
import Footer from './Footer'
import Header from './Header'

//1
const ThemeWrapper = React.createContext();

function ThemeManager() {
    // 2 -> wrap your entire application and add your value.
    return (
        <div>
            <h1>Theme Manager</h1>
            <button
                onClick={() => {
                    console.log("Toggle color to white->balck->white...")
                }}
            >
                Toggle Theme
            </button>
            <Header />
            <Footer />
            <Article />
        </div>
    )
}

export default ThemeManager