import React from "react";
import "./styles.css"

function List({setToDo,list,filter}) {
   
    const toogle = (index) => {

        setToDo(
            list.filter((todo,id)=>{
                if(id == index)
                {
                    todo.complate = !todo.complate
                }

                return todo;
            }))
    }

    const destroy = (index) => {

        setToDo(
            list.filter((todo,id)=>{
                if(id != index)
                {
                    return todo;
                }
            }))
    }

    return (
        
        <section className="main">

            <ul className="todo-list">
                {
                    list.map((todo,index)=>(

                        filter == "All" || (filter == "Active" && todo.complate == false) || (filter == "Completed" && todo.complate == true) ? 
                        (
                            <li key={index} className={todo.complate ? "completed": null}>
                                
                                <div className="view">
                                    <input className="toggle" type="checkbox" defaultChecked = {todo.complate ? true: false} onClick={()=> toogle(index)} ></input>
                                    <label>{todo.value}</label>
                                    <button className="destroy" onClick={()=> destroy(index)}></button>
                                </div>
                                
                            </li>
                        ) : null

                    ))
                }
            </ul>

        </section>

    );
}

export default List
