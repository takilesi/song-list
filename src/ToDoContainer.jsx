import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import "./ToDoContainer.css"
import SongNotes from './SongNotes'
import {v4 as uuidv4} from 'uuid'; 

function ToDoContainer() {

    const [todos, setTodos] = useState([])
    const [currentTodo, setCurrentTodo] = useState([])

    useEffect(() => {
    
         axios.get('http://localhost:3111/get')
        .then(result => {
            
            // setTodoToPass(todoToPass)
            setTodos(result.data)
            console.log("ToDoContainer / useEffect", result.data)
        })
        .catch(err => console.log(err))
    // dependancy, only runs on 
    },[])

    const handleEdit = (id) => {
        axios.put('http://localhost:3111/update/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3111/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    const handleClick = (i) => {
        setCurrentTodo(todos[i])
        console.log('You clicked on',todos[i])
      }

  return (
    <div>
        <div className="toDoContainer">
            {
                todos.length === 0 
                ? 
                <div><h3>No Record</h3></div>
                :
                todos.map((todo, index)  => (
                    <div className="containTask">
                        <div key={uuidv4()} className="task">
                            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                                <label className='icon' >
                                    <input type="checkbox"></input> 
                                </label>
                            </div> 
                                <p onClick={()=> {handleClick(index)}} className={todo.done 
                                    ? 
                                    "line_through" 
                                    : 
                                    ""}> {todo.task} </p>
                            <div>
                                <span className='icon' 
                                    onClick={() => handleDelete(todo._id)}>🗑️</span>
                            </div>
                        
                        </div>
                    </div>
                ))
            }
            
            
        </div>
        <SongNotes currentTodo={currentTodo} /> 
    </div>
  )
}

export default ToDoContainer