import React, {useState} from 'react'
import "./CreateSongNote.css"
import axios from 'axios'
import SongNoteContainer from './SongNoteContainer'

function CreateSongNote( {currentSong}, {handleClick} ) {
    // const [currentSong, setCurrentSong] = useState(currentSong); 
    const [songNote, setSongNote] = useState()
    const songName = currentSong.task
    const songNameId = currentSong._id

    console.log("currentSong variable: ", currentSong.task);

    console.log("Create Song Note TEST ", currentSong._id);
   
    const handleAdd = () => {
        // pass this data to the server side route 
        axios.post('http://localhost:3111/addsongnote', 
        {
          songNote: songNote, 
          songName: songName,
          songNameId: songNameId
        })
        
        // console.log("song id for notes list: ", currentSong._id);

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
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
        <SongNoteContainer currentSong={currentSong} handleClick={handleClick}/>
    </div>
  )
}

export default CreateSongNote