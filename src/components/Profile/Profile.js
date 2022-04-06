import React from 'react';
import './Profile.css'
import Header from "../Header/Header";
import {Link} from "react-router-dom";

function Profile () {
  return (
    <>
      <Header/>
      <section className='profile'>
        <h3 className='profile__title'>Привет, Виталий!</h3>
        <form className='profile__form'>
        <div className='profile__container'>
          <label className='profile__text'>Имя</label>
          <input className='profile__input' placeholder='Виталий'/>
        </div>
        <div className='profile__container'>
          <label className='profile__text' type='text'>E-mail</label>
          <input className='profile__input' placeholder='pochta@yandex.ru' type='text'/>
        </div>
          <button className='profile__button' type='submit'>Редактировать</button>
        </form>
        <Link className='profile__button-exit' to='/signin'>Выйти из аккаунта</Link>
      </section>
    </>
  )
}

export default Profile;
