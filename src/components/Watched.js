import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const Watched = () => {
  const { watched } = useContext(GlobalContext)

  return (
    <div>
      {watched.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </div>
  )
}
