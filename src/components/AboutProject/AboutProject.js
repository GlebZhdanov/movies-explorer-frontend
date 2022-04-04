import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <a name="about-project"></a>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='container-about'>
        <div className='about'>
          <h3 className='about__title'>Дипломный проект включал 5 этапов</h3>
          <p className='about__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about'>
          <h3 className='about__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='container-time'>
        <div className='container-time__item'>
          1 неделя
        </div>
        <div className='container-time__item container-time__item_fronted_color'>
          4 недели
        </div>
        <p className='container-time__subtitle'>Back-end</p>
        <p className='container-time__subtitle'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;
