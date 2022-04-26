import React from "react";
import './MoviesCard.css'
import {Route} from "react-router-dom";

function MoviesCard ({handleMovieSaveDelete ,films, handleSavedMovie, handleMovieDelete, checkLikeStatus }) {
  function handleDislike() {
    handleMovieSaveDelete(films)
  }

  const Like = checkLikeStatus(films);

  function handleLike() {
    handleSavedMovie(films)
  }

  const cardLikeButtonClassName = (`movies-card__button ${Like ? 'movies-card__button-active' : ''}`);

  function handlerTime () {
    let time = films.duration;
    if (time > 60) {
      return `${time / 60 ^ 0}ч ` + `${time % 60}м`;
    } else {
      return `${time % 60} минут`;
    }
  }

  function deleteCard () {
    handleMovieDelete(films._id)
  }

  return (
    <>
      <Route path='/movies'>
        <div className='movies-card'>
          <a href={films.trailerLink} target="_blank">
            <img src={`https://api.nomoreparties.co/${films.image.url}`} className='movies-card__image' alt={films.nameRU}/>
          </a>
          <div className='movies-card__container'>
            <h2 className='movies-card__title'>{films.nameRU}</h2>
            <button className={cardLikeButtonClassName} onClick={Like ? handleDislike : handleLike}></button>
          </div>
          <p className='movies-card__time'>{handlerTime()}</p>
        </div>
      </Route>
      <Route path='/saved-movies'>
        <div className='movies-card movies-card_delete'>
          <a href={films.trailerLink} target="_blank">
            <img src={films.image} className='movies-card__image' alt={films.nameRU}/>
          </a>
          <div className='movies-card__container'>
            <h2 className='movies-card__title'>{films.nameRU}</h2>
            <button onClick={deleteCard} className='movies-card__button movies-card__button_delete'></button>
          </div>
          <p className='movies-card__time'>{handlerTime()}</p>
        </div>
      </Route>
    </>
  )
}

export default MoviesCard;

