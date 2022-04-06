import React from "react";
import './Techs.css'

function Techs() {
  return (
    <section className='techs'>
      <a name="techs"></a>
      <div className='techs__info'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='container-technology'>
        <h4 className='container-technology__title'>7 технологий</h4>
        <p className='container-technology__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='list-item'>
          <li className='list-item__technology'>HTML</li>
          <li className='list-item__technology'>CSS</li>
          <li className='list-item__technology'>JS</li>
          <li className='list-item__technology'>React</li>
          <li className='list-item__technology'>Git</li>
          <li className='list-item__technology'>Express.js</li>
          <li className='list-item__technology'>mongoDB</li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default Techs;
