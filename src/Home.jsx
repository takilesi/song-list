import React from 'react'
import Create from './Create'
import ToDoContainer from './ToDoContainer'
import SongNotes from './SongNotes'
import './App.css'
import {v4 as uuidv4} from 'uuid'; 


function Home() {
    
  return (
    <div className="home">

        <h2>Repertoire List</h2>
        <Create />
        <ToDoContainer  /> 
        {/* <SongNotes />  */}
    </div>
  )
}

export default Home