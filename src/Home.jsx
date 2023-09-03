import React from 'react'
import CreateSong from './CreateSong'
import SongContainer from './SongContainer'
import './App.css'
import SongNoteContainer from './SongNoteContainer'

function Home() {
    
  return (
    <div className="home">
        <h2>Repertoire List</h2>
        <CreateSong />
        <SongContainer  /> 
        <SongNoteContainer />
    </div>
  )
}

export default Home