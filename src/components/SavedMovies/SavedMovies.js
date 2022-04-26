import React from 'react';
import './SavedMovies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies ({checkLikeStatus, handleSubmitSearch, isShort, saveMovies, handleMovieDelete, short, setQuery, querySaveFilms}) {

  return (
    <>
      <Header/>
      <SearchForm handleSubmit={handleSubmitSearch} setQuery={setQuery}/>
      <FilterCheckbox short={short} isShort={isShort}/>
      <MoviesCardList querySaveFilms={querySaveFilms} checkLikeStatus={checkLikeStatus} isShort={isShort} handleMovieDelete={handleMovieDelete} films={saveMovies}/>
      <Footer/>
    </>
  )
}

export default SavedMovies;
