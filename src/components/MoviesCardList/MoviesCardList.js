import React, {useEffect, useState} from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from "react-router-dom";
import {
  MOVIES_DURATION,
  MOVIES_WINDOW_AVERAGE, MOVIES_WINDOW_AVERAGE_ADD,
  MOVIES_WINDOW_LARGE,
  MOVIES_WINDOW_LARGE_ADD, MOVIES_WINDOW_LITTLE,
  SCREEN_WINDOW_AVERAGE,
  SCREEN_WINDOW_LARGE
} from "../../utils/constans";

function MoviesCardList({handleMovieSaveDelete ,filmFilter ,checkLikeStatus ,films, isShort, isLoading, handleSavedMovie, handleMovieDelete, querySaveFilms}) {
  const [count, setCount] = useState(0);
  const [addCount, setAddCount] = useState(0);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  const size = useWindowSize();

  useEffect(() => {
    function getSizeWindow() {
      if (size.width >= SCREEN_WINDOW_LARGE) {
        setCount(MOVIES_WINDOW_LARGE)
        setAddCount(MOVIES_WINDOW_LARGE_ADD);
      } else if (size.width >= SCREEN_WINDOW_AVERAGE) {
        setCount(MOVIES_WINDOW_AVERAGE)
        setAddCount(MOVIES_WINDOW_AVERAGE_ADD);
      } else {
        setCount(MOVIES_WINDOW_LITTLE)
        setAddCount(MOVIES_WINDOW_AVERAGE_ADD);
      }
    }
    getSizeWindow()
  },[size])

  const showMovies= () => {
    setCount(count + addCount)
  }


  return (
    <>
      <Route path='/(movies)/'>
        <section className='movies-list'>
          {films
          .filter(movie => !isShort || movie.duration <= MOVIES_DURATION)
          .slice(0, count)
          .map((film, i) => (
            <MoviesCard handleMovieSaveDelete={handleMovieSaveDelete} checkLikeStatus={checkLikeStatus} filmFilter={filmFilter} handleSavedMovie={handleSavedMovie} key={i} films={film}></MoviesCard>
          ))}
          {!films.length && !isLoading && (<p className='movies-list__text'>Ничего не найдено</p>)}
        </section>
        {count < films.filter(movie => !isShort || movie.duration <= MOVIES_DURATION).length && (
          <button onClick={showMovies} className='movies-button'>Ещё</button>
        )}
      </Route>
      <Route path='/(saved-movies)/'>
        <section className='movies-list'>
          {films
          .filter(movie => !isShort || movie.duration <= MOVIES_DURATION)
          .map((film, i) => (
            <MoviesCard checkLikeStatus={checkLikeStatus} handleMovieDelete={handleMovieDelete} key={i} films={film}></MoviesCard>
          ))}
          {!films.length && !isLoading && (<p className='movies-list__text'>Ничего не найдено</p>)}
        </section>
      </Route>
    </>
  )
}

export default MoviesCardList;
