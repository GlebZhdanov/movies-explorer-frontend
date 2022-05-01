import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import './Profile.css'
import Header from "../Header/Header";
import {ValidateLProfile} from "../../utils/Validate";
import {CurrentUserContext} from "../../context/CurrentUserContext";
const { initialValues, validationSchema } = ValidateLProfile

function Profile ({handlePatchUserInfo, logoutLogin}) {
  const currentUser = React.useContext(CurrentUserContext);

  const onSubmit = (values) => {
    handlePatchUserInfo({
      name: values.name,
      email: values.email
    })
  }

  return (
    <>
      <Header/>
      <section className='profile'>
        <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
        <Formik
          initialValues={{
            name: currentUser.name,
            email: currentUser.email
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {formik => {
            let ValueSum = formik.values.name === currentUser.name && formik.values.email === currentUser.email;
            let onCurrent = formik.dirty;
            let validateInput = formik.isValid
            let booleanDisable = !ValueSum && onCurrent && validateInput;
            return (
              <Form className='profile__form'>
                <div className='profile__container'>
                  <label className='profile__text'>Имя</label>
                  <Field className='profile__input'
                    type='text'
                    name='name'/>
                </div>
                <div id='name-error' className='form__text-error form__text-error_profile'>
                    <ErrorMessage name='name'/>
                </div>
                <div className='profile__container profile__container_border-none'>
                  <label className='profile__text' type='text'>E-mail</label>
                  <Field className='profile__input'
                    type='text'
                    name='email'/>
                </div>
                <div id='name-error' className='form__text-error form__text-error_profile'>
                    <ErrorMessage name='email'/>
                  </div>
                <button className={booleanDisable ? 'profile__button' : 'profile__button profile__button_disabled'} type='submit'
                        disabled={!(booleanDisable)}>
                  Редактировать</button>
              </Form>
            )
          }}
        </Formik>
        <button onClick={logoutLogin} className='profile__button-exit'>Выйти из аккаунта</button>
      </section>
    </>
  )
}

export default Profile;
