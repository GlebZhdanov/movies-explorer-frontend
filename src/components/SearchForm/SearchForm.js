import React from "react";
import './SearchForm.css'

function SearchForm () {

  return (
    <section className='search-form'>
      <div className='search'>
        <input className='search__input' type='search' placeholder='Фильм'/>
        <input className='search__input-button' type='submit' value='Поиск'/>
      </div>
    </section>
  )
}

export default SearchForm;
