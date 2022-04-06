import React from 'react';
import './Promo.css';

function Promo () {
  return (
    <>
      <section className='promo'>
        <h1 className='promo__title'>Учебный проект студента<br/>факультета Веб-разработки.</h1>
        <nav className='container-links'>
          <a href='#about-project'><button className='container-links__link'>О проекте</button></a>
          <a href='#techs'><button className='container-links__link'>Технологии</button></a>
          <a href='#about-me'><button className='container-links__link'>Студент</button></a>
        </nav>
      </section>
    </>
  )
}

export default Promo;
