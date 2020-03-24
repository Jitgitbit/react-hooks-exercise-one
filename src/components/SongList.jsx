import React, {useState} from 'react'
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

export default function SongList() {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: 1},
    {title: 'memory gospel', id: 2},
    {title: 'this wild darkness', id: 3}
  ])
  const addSong = () => {
    setSongs([...songs, {title:'new song', id: uuid() }])
  }
  return (
    <div>
      <ul>
        {songs.map(song => {
          return (<li key={song.id}>{song.title}</li>);
        })}
      </ul>
      <NewSongForm/>
    </div>
  )
}
