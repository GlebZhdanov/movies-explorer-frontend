import React from "react";
import imageFalse from "../../images/falseImage.svg";
import './InfoTooltip.css'

function InfoTooltip({isOpenPopup, isClosePopup, textError}) {

  return (
    <div className={`popup ${ isOpenPopup ? "popup_opened" : "" }`}>
      <div className="popup__form">
        <img src={imageFalse} className="popup__image"/>
        <p className="popup__title">{textError}</p>
        <button onClick={isClosePopup} type="button" className="popup__button-close" />
      </div>
    </div>
  )}

export default InfoTooltip;
