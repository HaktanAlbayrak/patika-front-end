import React from 'react'
import "./style.css"

export const Header = () => {
    return (
        <div>
            <h1 className='header'>Covid-19</h1>
            <br/>
            <h2> Global and Country Wise Cases of Corona Virus</h2>
            <br/>
            <h2 style={{fontStyle: "italic"}}> (For a Particular country, select a Country from below)</h2>
        </div>
    )
}
