import React, { useContext, useEffect, useState } from 'react'
import { Songs } from '../context/Songs';

const ListSongs = () => {
  const {DataSongs, hanglePlay, song} = useContext(Songs);
  // console.log(DataSongs);
  const [songID, setsongID] = useState(0);
  const handlePlaySong = (id) =>{
    hanglePlay(id);
    setsongID(id);
  }

  useEffect(() => {
    setsongID(song.id);
  }, [song])
  
  return (
    <div className='col-span-2 overflow-y-scroll'>
        <table className='table-auto text-lg w-full ' >
            <thead className= 'sticky top-0 bg-slate-700 text-white h-12 '>
            <tr>
                <th className='w-[10%]'>#</th>
                <th className='text-left'>Title</th>
                <th className='w-[10%]'>Author</th>
                <th className='w-[10%]'><i className="fa fa-download" aria-hidden="true"></i></th>
            </tr>
            </thead>
            <tbody className='divide-y divide-gray-700'>
              {
                DataSongs.map((song, index)=>(
                <tr key={index} className={`${songID === song.id ? ('bg-slate-600 text-teal-400'): ('bg-slate-800  text-slate-400 hover:bg-slate-600 hover:text-white ')} h-16 duration-500`} onClick={() => handlePlaySong(song.id)}>
                  <td className='text-center'>{index+1}</td>
                  <td>{song.name}</td>
                  <td className='text-center'>{song.author}</td>
                  <td className='text-center'><a href={song.url} className='fa fa-download'></a></td>
                </tr>
                ))
              }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListSongs