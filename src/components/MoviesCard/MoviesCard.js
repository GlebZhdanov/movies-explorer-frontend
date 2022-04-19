import React, {useState} from "react";
import './MoviesCard.css'
import {Route} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCard ({films, handleSavedMovie}) {
  const [isLike, setIsLike] = useState(false)

  function handleLike() {
    handleSavedMovie(films)
    setIsLike((like) => !like)
  }

  const cardLikeButtonClassName = (`movies-card__button ${isLike ? 'movies-card__button-active' : ''}`);

  function handlerTime () {
    let time = films.duration;
    if (time > 60) {
      return `${time / 60 ^ 0}ч ` + `${time % 60}м`;
    } else {
      return `${time % 60} минут`;
    }
  }


  return (
    <>
      <Route path='/movies'>
        <div className='movies-card'>
          <a href={films.trailerLink} target="_blank">
            <img src={`https://api.nomoreparties.co/${films.image.url}`} className='movies-card__image' alt='Постер фильма'/>
          </a>
          <div className='movies-card__container'>
            <h2 className='movies-card__title'>{films.nameRU}</h2>
            <button className={cardLikeButtonClassName} onClick={handleLike}></button>
          </div>
          <p className='movies-card__time'>{handlerTime()}</p>
        </div>
      </Route>
      {/*<Route path='/saved-movies'>*/}
      {/*  <div className='movies-card movies-card_delete'>*/}
      {/*    /!*<img src={`https://api.nomoreparties.co/${props.data.image.url}`} className='movies-card__image' alt='Постер фильма'/>*!/*/}
      {/*    <div className='movies-card__container'>*/}
      {/*      /!*<h2 className='movies-card__title'>{props.data.nameRU}</h2>*!/*/}
      {/*      <button className='movies-card__button movies-card__button_delete'></button>*/}
      {/*    </div>*/}
      {/*    /!*<p className='movies-card__time'>{props.data.duration} минут</p>*!/*/}
      {/*  </div>*/}
      {/*</Route>*/}
    </>
  )
}

export default MoviesCard;

