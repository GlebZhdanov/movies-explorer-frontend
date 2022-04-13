import React from 'react';
import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies ({films, preloader, isLoading, updateQuery, handleSubmitSearch}) {
  return (
    <>
      <Header/>
      <SearchForm handleSubmitSearch={handleSubmitSearch} updateQuery={updateQuery}/>
      <FilterCheckbox/>
      <MoviesCardList  isLoading={isLoading} preloader={preloader}  films={films}/>
      <Footer/>
    </>
  )
}

export default Movies;
