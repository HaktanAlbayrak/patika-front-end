import React,{useState,} from 'react'
import "./styles.css"

function Filter({filter,setFilter}) {

    return (
        <>

            <ul className="filters">
                <li>
                    <a className = {filter === "All" ? "selected": " "} onClick={()=>setFilter("All")} >All</a>
                </li>
                <li>
                    <a className = {filter === "Active" ? "selected": " "} onClick={()=>setFilter("Active")}> Active </a>
                </li>
                <li>
                    <a className = {filter === "Completed" ? "selected": " "} onClick={()=>setFilter("Completed")} >Completed</a>
                </li>
            </ul>

        </>
    )
}

export default Filter
