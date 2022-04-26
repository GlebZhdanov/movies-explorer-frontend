import React, {useEffect} from "react";
import imageFalse from "../../images/falseImage.svg";
import imageTrue from "../../images/trueImage.svg";
import './InfoTooltip.css'
import {KEYCODE_ESC} from "../../utils/constans";

function InfoTooltip({isOpenPopup, isClosePopup, textTitle, isSuccess, setPopupOpen}) {

  function clickPopupEsp(e) {
    if(e.keyCode === KEYCODE_ESC) {
      setPopupOpen(false);
    }
  }

  function closePopupEsp(popup) {
    if(popup === true) {
      document.addEventListener('keydown', clickPopupEsp)
    }
  }

  React.useEffect(() => {
    closePopupEsp(isOpenPopup);
    return (
      document.removeEventListener('keydown', clickPopupEsp)
    )
  }, [isOpenPopup]);

  return (
    <div className={`popup ${ isOpenPopup ? "popup_opened" : "" }`} onClick={() => setPopupOpen(false)}>
      <div className="popup__form">
        <img src={isSuccess ? imageTrue : imageFalse} className="popup__image"/>
        <p className="popup__title">{textTitle}</p>
        <button onClick={isClosePopup} type="button" className="popup__button-close" />
      </div>
    </div>
  )}

export default InfoTooltip;
