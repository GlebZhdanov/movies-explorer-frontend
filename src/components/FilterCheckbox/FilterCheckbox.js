import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox() {

  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__switch" type="checkbox"/>
      <label className="filter-checkbox__text">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;

