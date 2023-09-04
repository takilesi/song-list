import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./SongNoteContainer.css"

function SongNoteContainer( {currentSong, trigger} ) {

    const [songNotes, setSongNotes] = useState([])
    const [currentSongNoteList, setCurrentSongNoteList] = useState([])

    console.log("In 2nd Child, currentSong: ", currentSong.task);
    console.log("In 2nd Child, trigger: ", trigger);
    console.log("songNotes array; ", songNotes)

    useEffect(() => {
    
        axios.get('http://localhost:3111/getsongnote')
       .then(result => {
           
            setSongNotes(result.data)
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



   const log = () => {

        console.log("phone call from parent")
        
        setCurrentSongNoteList(songNotes.filter((s) => s.songName === currentSong.task)) 
    
        console.log("XX", songNotes.songName)
        console.log("XXcurrentSong", currentSong.task)
        console.log("2phone call from parent", currentSongNoteList)
        
    }

    useEffect(() => {
        if (trigger) {
          log();

        }
    }, [trigger]);

    // const isEven = (value) => value % 2 === 0;
    // const even = input.filter(isEven);


  return (
    <div className="songNoteContainer">
    {/* {songNotes.filter(name => name.includes(currentSong))} */}
    {
        currentSongNoteList.length === 0 
        ? 
        <div><h3>No Record</h3></div>
        :
        currentSongNoteList.map((songNote, index)  => (
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