import React, {useState} from 'react'

export default function SongList() {
  const [songs, setSongs] = useState([
    {title: 'almost home', id: 1},
    {title: 'memory gospel', id: 2},
    {title: 'this wild darkness', id: 3}
  ])
  return (
    <div>
      <ul>
        <li>this wild darkness</li>
        <li>memory gospel</li>
      </ul>
    </div>
  )
}
