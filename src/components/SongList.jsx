import React, {useState, useEffect} from 'react'
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

export default function SongList() {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: 1},
    {title: 'memory gospel', id: 2},
    {title: 'this wild darkness', id: 3}
  ])
  const [age, setAge] = useState(20)
  const addSong = (title) => {
    setSongs([...songs, {title, id: uuid() }])         //=========>> ES6 --> title: title is the same as title  !!!
  }
  useEffect(() => {
    console.log('useEffect hook ran for any:', songs);         //=========>> useEffect runs everytime on rendering and/or when ANY state/data inside the 
                                                       //=========>> component is being updated !!!
  })
  useEffect(() => {
    console.log('useEffect hook ran for songs only:', songs);         //=========>> useEffect runs everytime on rendering and/or when THE SPECIFIED
                                                               //=========>>  state/data inside the component is being updated !!!
  }, [songs] )                                         //=====>> this data !
  return (
    <div>
      <ul>
        {songs.map(song => {
          return (<li key={song.id}>{song.title}</li>);
        })}
      </ul>
      <NewSongForm addSong={addSong}/>
      <button onClick={()=> {setAge(age + 1)}}>Add 1 to age: {age}</button>
    </div>
  )
}
