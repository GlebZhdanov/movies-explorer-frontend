import './Header.css'
import logo from '../../images/logo.svg'
import React, {useState} from 'react';
import image from '../../images/accaunt.svg'
import menu from '../../images/menu-burger.svg'
import MenuBurger from "../MenuBurger/MenuBurger";
import {
  Link, Route, Switch,
} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header() {
  const [isActive, setIsActive] = useState(false);

  function switchMenuBurgerS() {
    setIsActive(true)
  }

  function offMenuBurger() {
    setIsActive(false)
  }

  return (
    <>
        <Switch>
        <Route exact path='/'>
          <header className='header'>
            <Link to='/'>
              <img className='header__image' src={logo} alt='Логотип'/>
            </Link>
            <nav className='navigation'>
              <Link to='/signup' className='navigation__register'>Регистрация</Link>
              <Link to='/signin' className='navigation__login'>Войти</Link>
            </nav>
          </header>
        </Route>
        <Route path='/(signin|signup)/'>
          <Link to='/'>
            <img className='header__image' src={logo} alt='Логотип'/>
          </Link>
        </Route>
        <Route path='/(profile|movies|saved-movies)/'>
          <header className='header'>
            <Link to='/'>
              <img className='header__image' src={logo} alt='Логотип'/>
            </Link>
            <Navigation/>
            <div className='burger' onClick={switchMenuBurgerS}>
              <img className='burger__image' src={menu}/>
            </div>
            <div className='account'>
              <Link className='account__link' to='/profile'>Аккаунт</Link>
              <div className='account__container'>
                <img src={image} className='account__container__image' alt='Аккаунт'/>
              </div>
            </div>
            <MenuBurger isActive={isActive} offMenuBurger={offMenuBurger}/>
          </header>
        </Route>
        </Switch>
    </>
  )
}

export default Header;
