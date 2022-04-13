import React from "react";
import './Navigation.css'
import {NavLink, Route} from "react-router-dom";

function Navigation () {
  return (
      <Route path='/(movies|saved-movies)/'>
        <div className='navigate'>
          <NavLink to='/movies' className='navigate__link' activeClassName='navigate__link_active'>Фильмы</NavLink>
          <NavLink to='/saved-movies' className='navigate__link' activeClassName='navigate__link_active'>Сохранённые фильмы</NavLink>
        </div>
      </Route>
  )
}

export default Navigation;
