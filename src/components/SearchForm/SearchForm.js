import React from "react";
import './SearchForm.css'

function SearchForm () {

  return (
    <section className='search'>
        <form className='search__form'>
        <input className='search__input' type='search' placeholder='Фильм' required/>
        <input className='search__input-button' type='submit' value='Поиск'/>
        </form>
    </section>
  )
}

export default SearchForm;
