import React from 'react';
import './Portfolio.css'
import logo from '../../images/link.svg'


function Portfolio () {
  return (
    <>
    <section className='portfolio'>
      <p className='portfolio__title'>Портфолио</p>
        <div className='content-portfolio'>
          <a className='content-portfolio__link' href='https://github.com/GlebZhdanov/how-to-learn' target="_blank">Статичный сайт</a>
          <img className='content-portfolio__logo' src={logo}/>
        </div>
        <div className='content-portfolio'>
          <a className='content-portfolio__link' href='https://github.com/GlebZhdanov/russian-travel' target="_blank">Адаптивный сайт</a>
          <img className='content-portfolio__logo' src={logo}/>
        </div>
        <div className='content-portfolio'>
          <a className='content-portfolio__link' href='https://github.com/GlebZhdanov/mesto' target="_blank">Одностраничное приложение</a>
          <img className='content-portfolio__logo' src={logo}/>
        </div>
    </section>
    </>
  )
}

export default Portfolio;
