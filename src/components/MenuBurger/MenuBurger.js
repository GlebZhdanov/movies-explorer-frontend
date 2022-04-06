import React from 'react';
import './MenuBurger.css'
import {Link} from "react-router-dom";
import image from "../../images/accaunt.svg";
import burgerClose from '../../images/button__close.svg'

function MenuBurger ({isActive ,offMenuBurger}) {

  const MenuBurgerClassName = (`burger-menu ${isActive ? 'burger-menu_active' : ''}`);

  return (
        <div className={MenuBurgerClassName}>
          <div className="burger-menu__container">
            <ul className="burger-menu__container-text">
              <li className="burger-menu__text">
                <Link className='burger-menu__container-text__link' to='/'>Главная</Link>
              </li>
              <li className="burger-menu__text">
                <Link className='burger-menu__container-text__link' to='/movies'>Фильмы</Link>
              </li>
              <li className="burger-menu__text">
                <Link className='burger-menu__container-text__link' to='/saved-movies'>Сохранённые фильмы</Link>
                </li>
            </ul>
            <div className='burger-menu__account'>
              <Link className='burger-menu__link' to='/profile'>Аккаунт</Link>
              <div className='account__container'>
                <img src={image} className='account__container__image'/>
              </div>
            </div>
              <img className='burger-menu__button-close' onClick={offMenuBurger} src={burgerClose}/>
          </div>
      </div>
  )
}

export default MenuBurger;
