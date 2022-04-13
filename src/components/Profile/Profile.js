import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import './Profile.css'
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import {ValidateLProfile} from "../../utils/Validate";

function Profile () {
  const { initialValues, validationSchema } = ValidateLProfile

  const onSubmit = () => {
    console.log('214')
  }


  return (
    <>
      <Header/>
      <section className='profile'>
        <h3 className='profile__title'>Привет, Виталий!</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {formik => {
            return (
              <Form className='profile__form'>
                <div className='profile__container'>
                  <label className='profile__text'>Имя</label>
                  <Field className='profile__input'
                    placeholder='Виталий'
                    name='name'/>
                </div>
                <div id='name-error' className='form__text-error form__text-error_profile'>
                    <ErrorMessage name='name'/>
                </div>
                <div className='profile__container profile__container_border-none'>
                  <label className='profile__text' type='text'>E-mail</label>
                  <Field className='profile__input'
                    placeholder='pochta@yandex.ru'
                    type='text'
                    name='email'/>
                </div>
                <div id='name-error' className='form__text-error form__text-error_profile'>
                    <ErrorMessage name='email'/>
                  </div>
                <button className={(formik.isValid) ? 'profile__button' : 'profile__button profile__button_disabled'} type='submit'
                        disabled={!(formik.isValid)}>
                  Редактировать</button>
              </Form>
            )
          }}
        </Formik>
        <Link className='profile__button-exit' to='/signin'>Выйти из аккаунта</Link>
      </section>
    </>
  )
}

export default Profile;
