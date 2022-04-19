import React, {useState} from 'react';
import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies ({ short, isShort, films, isLoading, setQuery, handleSubmitSearch, query, preloader, handleSavedMovie}) {

  return (
    <>
      <Header/>
      <SearchForm query={query} handleSubmitSearch={handleSubmitSearch} setQuery={setQuery}/>
      <FilterCheckbox short={short} isShort={isShort}/>
      <MoviesCardList handleSavedMovie={handleSavedMovie} isShort={isShort} isLoading={isLoading} preloader={preloader} films={films}/>
      <Footer/>
    </>
  )
}

export default Movies;
