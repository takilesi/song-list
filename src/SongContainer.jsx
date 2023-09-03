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
        console.log('You clicked on',songs[i])
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
                                <p onClick={()=> {handleClick(index)}} className={song.done 
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
        <CreateSongNote currentSong={currentSong} /> 
    </div>
  )
}

export default SongContainer