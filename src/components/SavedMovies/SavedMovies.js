import React from 'react';
import './SavedMovies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies ({checkLikeStatus,handleSubmitSearch ,isShort ,saveMovies, handleMovieDelete, short, query, setQuery}) {

  return (
    <>
      <Header/>
      <SearchForm query={query} handleSubmitSearch={handleSubmitSearch} setQuery={setQuery}/>
      <FilterCheckbox short={short} isShort={isShort}/>
      <MoviesCardList checkLikeStatus={checkLikeStatus} isShort={isShort} handleMovieDelete={handleMovieDelete} films={saveMovies}/>
      <Footer/>
    </>
  )
}

export default SavedMovies;
