import React from "react";
import './Register.css'
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <Link to='/'>
        <img className='login__image' src={logo} alt='Логотип'/>
      </Link>
      <h2 className="register__title">
        Добро пожаловать!
      </h2>
      <form className="form">
        <label className="form__title">Имя</label>
        <input className="form__input"
          required
          type="name"
          defaultValue='Виталий'/>
        <span id='name-error' className='form__text-error'></span>
        <label className="form__title">E-mail</label>
        <input className="form__input"
          required
          type="email"
          defaultValue='pochta@yandex.ru'/>
        <span id='email-error' className='form__text-error'></span>
        <label className="form__title">Пароль</label>
        <input className="form__input"
          required
          defaultValue='Виталий'
          type="password"/>
        <span id='password-error' className='form__text-error'>Что-то пошло не так...</span>
          <button className="button button_register_margin" type="submit">
            <Link className='button__link' to='/signin'>Зарегистрироваться</Link>
          </button>
      </form>
      <p className="form__link">Уже зарегистрированы?
        <Link to="/signin" className="form__link-text"> Войти</Link>
      </p>
    </section>
  )
};

export default Register;
