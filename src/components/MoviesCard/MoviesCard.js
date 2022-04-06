import React, {useState} from "react";
import './MoviesCard.css'
import {Route} from "react-router-dom";

function MoviesCard (props) {
  const [isLike, setIsLike] = useState(false)

  function handleLike() {
    if(isLike==true) {
      setIsLike(false)
    } else {
      setIsLike(true)
    }
  }

  const cardLikeButtonClassName = (`movies-card__button ${isLike ? 'movies-card__button-active' : null}`);

  return (
    <>
      <Route path='/movies'>
        <div className='movies-card'>
          <img src={props.data.link} className='movies-card__image' alt='Постер фильма'/>
          <div className='movies-card__container'>
            <h2 className='movies-card__title'>{props.data.name}</h2>
            <button className={cardLikeButtonClassName} onClick={handleLike}></button>
          </div>
          <p className='movies-card__time'>{props.data.time}</p>
        </div>
      </Route>
      <Route path='/saved-movies'>
        <div className='movies-card movies-card_delete'>
          <img src={props.data.link} className='movies-card__image' alt='Постер фильма'/>
          <div className='movies-card__container'>
            <h2 className='movies-card__title'>{props.data.name}</h2>
            <button className='movies-card__button movies-card__button_delete'></button>
          </div>
          <p className='movies-card__time'>{props.data.time}</p>
        </div>
      </Route>
    </>
  )
}

export default MoviesCard;

