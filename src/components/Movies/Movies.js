import React from 'react';
import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies () {
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

export default Movies;
