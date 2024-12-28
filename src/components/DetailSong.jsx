import React, { useContext } from 'react'
import { Songs } from '../context/Songs'

const DetailSong = () => {
  const {song} = useContext(Songs);
  return (
    <div className='col-span-1 p-3'>
        <h2 className='text-cyan-500 text-2xl'>Now Playing</h2>
        <h2 className='text-neutral-400 text-2xl'>{song.name}</h2>
        <div className='w-[350px] m-auto mt-20'>
            <img className='w-full' src={song.links.images[0].url} alt="Avatar" />
        </div>
        <div className='flex justify-evenly mt-10 items-center'>
            <img className='w-[100px] rounded-full' src={song.links.images[1].url}alt="Author" />
            <span className='text-cyan-600 text-xl'>{song.author}</span>
        </div>
    </div>
  )
}

export default DetailSong