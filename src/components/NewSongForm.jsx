import React from 'react'

export default function NewSongForm() {
  return (
    <form>
      <label>Song name:</label>
      <input type='text' required/>
      <input type='submit' value='add song'/>
    </form>
  )
}
