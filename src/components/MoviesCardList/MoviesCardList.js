import React from "react";
import './MoviesCardList.css'
import {films} from "../../utils/Films";
import {saveFilms} from "../../utils/SaveFilms";
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from "react-router-dom";


function MoviesCardList() {
  return (
    <>
      <Route path='/movies'>
        <section className='movies-list'>
          {films.map((film, i) => (
            <MoviesCard key={i} data={film}></MoviesCard>
          ))}
        </section>
        <button className='movies-button'>Ещё</button>
      </Route>
      <Route path='/saved-movies'>
        <section className='movies-list'>
          {saveFilms.map((film, i) => (
            <MoviesCard key={i} data={film}></MoviesCard>
          ))}
        </section>
      </Route>
    </>
  )

}

export default MoviesCardList;
