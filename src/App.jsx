import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import DetailSong from './components/DetailSong'
import ListSongs from './components/ListSongs'
import {Songs} from './context/Songs.js'
import DataSongs from './data/songs.json'
import Playing from './components/Playing.jsx'
import './App.css';

function App() { 
  const [song, setsong] = useState(DataSongs[0]);
  if(!song){
    setsong(DataSongs[0]);
  }
  const hanglePlay = (id)=>{
    const song = DataSongs.find(song => song.id === id);
    // console.log(song);
    setsong(song);
  }
  return (
    <>
      <div className='App bg-black '>
        <Songs.Provider value={{DataSongs, song, hanglePlay}}>
          <Navbar />
          <div className='grid grid-cols-3 h-screen-navbar-player bg-slate-700 overflow-hidden'>
              <DetailSong/>
              <ListSongs/>
          </div>
          <Playing />
        </Songs.Provider >
       
      </div>
    </>
  )
}

export default App
