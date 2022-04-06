import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css'


function PageNotFound () {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <NavLink className="not-found__link" to='/'>Назад</NavLink>
    </div>
  )
}

export default PageNotFound;
