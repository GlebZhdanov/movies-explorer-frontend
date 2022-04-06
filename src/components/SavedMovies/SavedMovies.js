import React from 'react';
import './SavedMovies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies () {
  return (
    <>
      <Header/>
      <SearchForm/>
      <FilterCheckbox/>
      <MoviesCardList/>
      <Footer/>
    </>
  )
}

export default SavedMovies;
