import React, {useState} from 'react'
import "./CreateSongNote.css"
import axios from 'axios'
import SongNoteContainer from './SongNoteContainer'

function CreateSongNote( {currentSong, trigger} ) {
    // const [currentSong, setCurrentSong] = useState(currentSong); 
    const [songNote, setSongNote] = useState()
    const songName = currentSong.task
    const songNameId = currentSong._id

    console.log("In first Child, currentSong: ", currentSong.task);
    console.log("In first Child, trigger: ", trigger);
    console.log("Create Song Note TEST ", currentSong._id);
   
    const handleAdd = () => {
        // pass this data to the server side route 
        axios.post('http://localhost:3111/addsongnote', 
        {
          songNote: songNote, 
          songName: songName,
          songNameId: songNameId
        })

        .then(result => {
          location.reload()
        })
        .catch(err => console.log(err))
      }

  return ( 
    <div>
        <p>Enter note for... {currentSong.task}</p> 
        <div className="create_form">
            <input  type="text" placeholder="Song Note" onChange={(e) => setSongNote(e.target.value)} />
            <button type="button" onClick={handleAdd}>{"Add" + trigger}</button>
        </div>
        <SongNoteContainer currentSong={currentSong} trigger={trigger}/>
    </div>
  )
}

export default CreateSongNote