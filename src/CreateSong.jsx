import React, { useState } from 'react'
import axios from 'axios'
import "./CreateSong.css"

function CreateSong() {
    const [song, setSong] = useState()
    const handleAdd = () => {
      // pass this data to the server side route 
      axios.post('http://localhost:3111/add', {song: song})
      .then(result => {
        location.reload()
      })
      .catch(err => console.log(err))
    }
  return (
    <div className="create_form">
        <input  type="text" placeholder="Enter Song" onChange={(e) => setSong(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default CreateSong