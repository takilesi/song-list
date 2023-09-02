import React from 'react'
import "./SongNotes.css"

function SongNotes({currentTodo}) {

  console.log("SongNotes: ", currentTodo);
   
  if (currentTodo.task === undefined) {

    return (
      <div className="description">
        Song Notes Go Here 
      </div>
    )
  }

  console.log(currentTodo); 
  return (
    <div className="description">
      <p> {currentTodo.task} Notes:</p>   
    </div>
  )
}

export default SongNotes