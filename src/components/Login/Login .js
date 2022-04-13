import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import './Login.css'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import {ValidateLogin} from "../../utils/Validate";

function Login() {
  const { initialValues, onSubmit, validationSchema } = ValidateLogin

  return (
    <section className='login'>
      <Link to='/'>
        <img className='login__image' src={logo} alt='Логотип'/>
      </Link>
      <h2 className='login__title'>
        Рады видеть!
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {formik => {
          return (
            <Form className='form'>
              <label className='form__title'>E-mail</label>
              <Field className='form__input'
                type='email'
                name='email'/>
              <span id='name-error' className='form__text-error'>
                <ErrorMessage name='email'/>
              </span>
              <label className='form__title'>Пароль</label>
              <Field className='form__input'
                name='password'
                type='password'/>
              <span id='name-error' className='form__text-error'>
                <ErrorMessage name='password'/>
              </span>
              <button type='submit' className={(formik.dirty && formik.isValid) ? 'button button_login_margin' : 'button button_login_margin button_disabled'}
                disabled={!(formik.dirty && formik.isValid)}>
                Войти
              </button>
            </Form>
          )}}
      </Formik>
      <p className='form__link'>Ещё не зарегистрированы?
        <Link to='/signup' className='form__link-text'> Регистрация</Link>
      </p>
    </section>
  )
};

export default Login;
