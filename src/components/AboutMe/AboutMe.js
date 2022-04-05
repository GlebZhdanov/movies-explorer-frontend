import React from "react";
import './AboutMe.css';
import avatar from '../../images/avatar.svg'

function AboutMe() {
  return (
    <section className='about-me'>
      <a name='about-me'></a>
      <h3 className='about-me__title'>Студент</h3>
      <div className='container'>
        <div className='content'>
        <h3 className='content__title'>Глеб</h3>
        <p className='content__text'>Фронтенд-разработчик, 27 лет</p>
        <p className='content__subtitle'>Я родился и живу в Архангельске, закончил ИСМАРТ по специальности СЭУ. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <nav className='list-links'>
          <a href='https://t.me/glzhi' target="_blank" className='list-links__link'>Telegram</a>
          <a href='https://github.com/GlebZhdanov' target="_blank" className='list-links__link'>Github</a>
        </nav>
        </div>
        <img className='avatar' src={avatar} alt='Аватар'></img>
      </div>
    </section>
  )
}

export default AboutMe;
