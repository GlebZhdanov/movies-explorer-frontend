import React, {useState} from 'react';
import './FilterCheckbox.css'

function FilterCheckbox({isShort ,short}) {

  return (
    <div className="filter-checkbox">
      <input className="filter-checkbox__switch" type="checkbox" checked={isShort} onChange={() => short(!isShort)}/>
      <label  className="filter-checkbox__text">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;

