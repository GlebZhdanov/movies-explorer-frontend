import React, {useEffect, useState} from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from "react-router-dom";
import Preloader from "../Preloader/Preloader";


function MoviesCardList({films, preloader, isLoading}) {
  const [listFilms, setListFilms] = useState(12)

  function handleFilms () {
    setListFilms(listFilms + 3)
  }


  return (
    <>
      <Route path='/movies'>
        <section className='movies-list'>
          <Preloader preloader={preloader} />
          {films.slice(0, listFilms).map((film, i) => (
            <MoviesCard key={i} films={film}></MoviesCard>
          ))}
          {!films.length && !isLoading && (<p className='movies-list__text'>Ничего не найдено</p>)}
        </section>
        <button onClick={handleFilms} className='movies-button'>Ещё</button>
      </Route>
      <Route path='/saved-movies'>
        <section className='movies-list'>
          {films.map((film, id) => (
            <MoviesCard key={id} films={film}></MoviesCard>
          ))}
        </section>
      </Route>
    </>
  )

}

export default MoviesCardList;
