// get
// put 
// delete
import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import "./SongContainer.css"
import CreateSongNote from './CreateSongNote'


function SongContainer() {

    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState([])
    const [trigger, setTrigger] = useState(0); 

    useEffect(() => {
    
         axios.get('http://localhost:3111/get')
        .then(result => {
            
            // setSongToPass(songToPass)
            setSongs(result.data)
            console.log("SongContainer / useEffect", result.data)
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
        setCurrentSong(songs[i])
        // eachSongsNotes()
        console.log('You clicked on',songs[i])
        console.log("Trigger in Parent: ", trigger)
    }

  return (
    <div>
        <div className="toDoContainer">
            {
                songs.length === 0 
                ? 
                <div><h3>No Record</h3></div>
                :
                songs.map((song, index)  => (
                    <div className="containTask">
                        <div className="task">
                            <div className="checkbox" onClick={() => handleEdit(song._id)}>
                                <label className='icon' >
                                    <input type="checkbox"></input> 
                                </label>
                            </div> 
                                <p onClick={()=>  {
                                        handleClick(index);
                                        setTrigger((trigger) => trigger + 1)
                                    }} 
                                    className={song.done 
                                    ? 
                                    "line_through" 
                                    : 
                                    ""}> {song.task} </p>
                            <div>
                                <span className='icon' 
                                    onClick={() => handleDelete(song._id)}>🗑️</span>
                            </div>
                        
                        </div>
                    </div>
                ))
            }
            
            
        </div>
        <CreateSongNote currentSong={currentSong} trigger={trigger}/> 
    </div>
  )
}

export default SongContainer