import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className='login'>
      <Link to='/'>
        <img className='login__image' src={logo} alt='Логотип'/>
      </Link>
      <h2 className='login__title'>
        Рады видеть!
      </h2>
      <form className='form'>
        <label className='form__title'>E-mail</label>
        <input className='form__input'
          required
          type='email'
          defaultValue='pochta@yandex.ru|'/>
        <span id='name-error' className='form__text-error'></span>
        <label className='form__title'>Пароль</label>
        <input className='form__input'
          required
          type='password'/>
        <span id='name-error' className='form__text-error'></span>
          <button className='button button_login_margin' type='submit'>
            <Link className='button__link' to='/profile'>Войти</Link>
          </button>
      </form>
      <p className='form__link'>Ещё не зарегистрированы?
        <Link to='/signup' className='form__link-text'> Регистрация</Link>
      </p>
    </section>
  )
};

export default Login;
