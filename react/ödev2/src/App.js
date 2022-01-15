import './App.css';
import React,{useState,useEffect} from 'react'
import AddToDO from './companents/AddToDo'
import List from './companents/List';
import Filter from './companents/Filter';


function App() {

  const [toDoList,setToDo] = useState([])

  const [filter,setFilter] = useState("All")

  useEffect(() => {
    
    console.log(toDoList)

  }, [toDoList])

  return (
    
    <div className="App">

      <section className="todoapp">
       
        <header className="header">
          <h1>todos</h1>
          <AddToDO setToDo = {setToDo} list = {toDoList}/>
        </header>
        
          <List setToDo = {setToDo} list = {toDoList} filter = {filter}/>

        <footer className="footer">

          <span className="todo-count">
                  <strong>{toDoList.length} </strong>
                  items left
          </span>

            <Filter list = {toDoList} filter = {filter} setFilter = {setFilter}/>
            <button className="clear-completed" onClick={()=> setToDo([])}> Clear completed </button>

          </footer>

      </section>

    </div>
  );
}

export default App;
