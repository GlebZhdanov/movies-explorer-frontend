import React, {useEffect, useState} from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route, Switch} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({handleMovieSaveDelete ,filmFilter ,checkLikeStatus ,films, isShort, isLoading, handleSavedMovie, handleMovieDelete}) {
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
      if (size.width >= 1280) {
        setCount(12)
        setAddCount(3);
      } else if(size.width >= 786) {
        setCount(8)
        setAddCount(2);
      } else {
        setCount(5)
        setAddCount(2);
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
          .filter(movie => !isShort || movie.duration <= 40)
          .slice(0, count)
          .map((film, i) => (
            <MoviesCard handleMovieSaveDelete={handleMovieSaveDelete} checkLikeStatus={checkLikeStatus} filmFilter={filmFilter} handleSavedMovie={handleSavedMovie} key={i} films={film}></MoviesCard>
          ))}
          {!films.length && !isLoading && (<p className='movies-list__text'>Ничего не найдено</p>)}
        </section>
        {count < films.filter(movie => !isShort || movie.duration <= 40).length && (
          <button onClick={showMovies} className='movies-button'>Ещё</button>
        )}
      </Route>
      <Route path='/(saved-movies)/'>
        <section className='movies-list'>
          {films
          .filter(movie => !isShort || movie.duration <= 40)
          .map((film, i) => (
            <MoviesCard checkLikeStatus={checkLikeStatus} handleMovieDelete={handleMovieDelete} key={i} films={film}></MoviesCard>
          ))}
          {!films.length && !isLoading && (<p className='movies-list__text'>Сохраненных фильмов нет</p>)}
        </section>
      </Route>
    </>
  )
}

export default MoviesCardList;
