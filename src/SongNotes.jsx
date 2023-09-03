import React, {useState} from 'react'
import "./SongNotes.css"
import axios from 'axios'

function SongNotes({currentTodo}) {
    const [songNote, setSongNote] = useState()

    console.log("SongNotes: ", currentTodo);
   
    const handleAdd = () => {
        // pass this data to the server side route 
        axios.post('http://localhost:3111/addsongnote', {songNote: songNote, songName: currentTodo.task})
        // console.log("any songNote?: ", songNote)
        // console.log("any task?: ", currentTodo.task)

        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))
      }

  return ( 
    <div>
        <p>Enter note for... {currentTodo.task}</p> 
        <div className="create_form">
            <input  type="text" placeholder="Song Note" onChange={(e) => setSongNote(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    </div>
  )
}

export default SongNotes