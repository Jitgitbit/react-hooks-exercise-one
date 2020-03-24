import React, {useState, useEffect} from 'react'
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

export default function SongList() {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: 1},
    {title: 'memory gospel', id: 2},
    {title: 'this wild darkness', id: 3}
  ])
  const addSong = (title) => {
    setSongs([...songs, {title, id: uuid() }])         //=========>> ES6 --> title: title is the same as title  !!!
  }
  useEffect(() => {
    console.log('useEffect hook ran:', songs);         //=========>> useEffect runs everytime on rendering and/or when any state/data inside the 
                                                       //=========>> component is being updated !!!
  })
  return (
    <div>
      <ul>
        {songs.map(song => {
          return (<li key={song.id}>{song.title}</li>);
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
    </div>
  )
}
