import React,{useState} from 'react'
import "./styles.css"

function AddToDo({setToDo,list}) {
    
    const [text, setTxt] = useState("");

    const onSubmit = (event) => {

        event.preventDefault();

        if(text != "")
        {
            setToDo([...list,{value:text,complate:false,visible:false}])
        }

        setTxt("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input value = {text} onChange={(event)=>setTxt(event.target.value)} className="new-todo" placeholder='What needs to be done'></input>
        </form>
    )
}

export default AddToDo
