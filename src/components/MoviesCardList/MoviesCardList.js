import React, {useEffect, useState} from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({films, preloader, isShort, isLoading, handleSavedMovie}) {
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
  },[size])

  const showMovies= () => {
    setCount(count + addCount)
  }

  return (
    <>
      <Route path='/movies'>
        <section className='movies-list'>
          <Preloader preloader={preloader} />
          {films
          .filter(movie => !isShort || movie.duration <= 40)
          .slice(0, count)
          .map((film, i) => (
            <MoviesCard handleSavedMovie={handleSavedMovie} key={i} films={film}></MoviesCard>
          ))}
          {!films.length && !isLoading && (<p className='movies-list__text'>Ничего не найдено</p>)}
        </section>
        {count < films.filter(movie => !isShort || movie.duration <= 40).length && (
          <button onClick={showMovies} className='movies-button'>Ещё</button>
        )}
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
