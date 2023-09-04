import React from 'react'
import CreateSong from './CreateSong'
import SongContainer from './SongContainer'
import './App.css'


function Home() {
    
  return (
    <div className="home">
        <h2>Repertoire List</h2>
        <CreateSong />
        <SongContainer  /> 
      
    </div>
  )
}

export default Home