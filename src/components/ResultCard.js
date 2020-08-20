import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext)
  const { addMovieToWatched, watched } = useContext(GlobalContext)

  let storedMovie = watchlist.find(o => o.id === movie.id)
  let storedWatchedMovie = watched.find(o => o.id === movie.id)

  const watchlistDisable = storedMovie ? true : false
  const watchedDisable = storedWatchedMovie ? true : false

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
        ) : (
            <div className="filler-poster" />
          )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button className="btn" onClick={() => addMovieToWatchlist(movie)} disabled={watchlistDisable} >
            Add to watchlist
          </button>
          <button className="btn" onClick={() => addMovieToWatched(movie)} disabled={watchedDisable} >
            Add to watched
          </button>
        </div>
      </div>
    </div>
  )
}
