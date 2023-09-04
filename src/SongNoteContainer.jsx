import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./SongNoteContainer.css"

function SongNoteContainer( {currentSong}, {handleClick} ) {

    const [songNotes, setSongNotes] = useState([])
    const [tempSongNotes, setTempSongNotes] = useState([])
    const [currentSongNoteList, setCurrentSongNoteList] = useState([])

    useEffect(() => {
    
        axios.get('http://localhost:3111/getsongnote')
       .then(result => {
           
            setTempSongNotes(result.data)
            console.log("SongNotesContainer / useEffect", result.data)
       })
       .catch(err => console.log(err))
   // dependancy, only runs on 
   },[])

   const handleEdit = (id) => {
       axios.put('http://localhost:3111/updatesongnote/'+id)
       .then(result => {
           location.reload()
       })
       .catch(err => console.log(err))
   }

   const handleDelete = (id) => {
       axios.delete('http://localhost:3111/deletesongnote/'+id)
       .then(result => {
           location.reload()
       })
       .catch(err => console.log(err))
   }

  

//    const eachSongsNotes = () => {
//         const songsTemp = []
//         for (let i=0; i<tempSongNotes.length; i++) {
//             if (tempSongNotes.songName === currentSong) {
//                 songsTemp.push(songNotes) 
//             }
//         }
//         setCurrentSongNoteList(songsTemp)
//     }

  return (
    <div className="songNoteContainer">
    {
        songNotes.length === 0 
        ? 
        <div><h3>No Record</h3></div>
        :
        songNotes.map((songNote, index)  => (
            <div className="containTask">
                <div className="task">
                    <div className="checkbox" onClick={() => handleEdit(songNote._id)}>
                        <label className='icon' >
                            <input type="checkbox"></input> 
                        </label>
                    </div> 
                        <p className={songNote.done 
                            ? 
                            "line_through" 
                            : 
                            ""}> {songNote.songNote} </p>
                    <div>
                        <span className='icon' 
                            onClick={() => handleDelete(songNote._id)}>🗑️</span>
                    </div>
                
                </div>
            </div>
        ))
    }
    
    
</div>
  )
}

export default SongNoteContainer