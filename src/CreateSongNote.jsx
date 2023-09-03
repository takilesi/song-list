import React, {useState} from 'react'
import "./CreateSongNote.css"
import axios from 'axios'

function CreateSongNote({currentSong}) {
    // const [currentSong, setCurrentSong] = useState(currentSong); 
    const [songNote, setSongNote] = useState()

    console.log("SongNote: ", currentSong);
    console.log("What is in songNote? ", songNote);
    console.log("Create Song Note TEST ", currentSong._id);
   
    const handleAdd = () => {
        // pass this data to the server side route 
        axios.post('http://localhost:3111/addsongnote', 
        {
          songNote: songNote, 
          songName: currentSong.task,
          songNameId: currentSong._id
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
    </div>
  )
}

export default CreateSongNote