import React from 'react'
import './Preloader.css'

const Preloader = ({preloader}) => {
  const preloaderClassName = (`preloader ${preloader ? '' : 'preloader_hidden'}`)

  return (
  <div className={preloaderClassName}>
    <div className="preloader__container">
      <span className="preloader__round"></span>
    </div>
  </div>
  )
};

export default Preloader
