import React from "react";
import './Register.css'
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {ValidateRegister} from "../../utils/Validate";

function Register({handleRegister}) {
  const { initialValues, validationSchema } = ValidateRegister

  function onSubmit(value) {
    handleRegister(value.name, value.email, value.password)
  }

  return (
    <section className="register">
      <Link to='/'>
        <img className='login__image' src={logo} alt='Логотип'/>
      </Link>
      <h2 className="register__title">
        Добро пожаловать!
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {formik => {
          return (
            <Form className="form">
              <label className="form__title">Имя</label>
              <Field className="form__input"
                required
                type="name"
                name='name'
              />
              <span id='name-error' className='form__text-error'>
                <ErrorMessage name='name'/>
              </span>
              <label className="form__title">E-mail</label>
              <Field className="form__input"
                required
                type="email"
                name='email'
                />
              <span id='email-error' className='form__text-error'>
                <ErrorMessage name='email'/>
              </span>
              <label className="form__title">Пароль</label>
              <Field className="form__input"
                required
                name='password'
                type='password'
              />
              <span id='password-error' className='form__text-error'>
                <ErrorMessage name='password'/>
              </span>
              <button
                className={(formik.dirty && formik.isValid) ? 'button button_register_margin' : 'button button_register_margin button_disabled'} type='submit' disabled={!(formik.dirty && formik.isValid)}>
                Зарегистрироваться
              </button>
            </Form>
          )}}
      </Formik>
      <p className="form__link">Уже зарегистрированы?
        <Link to="/signin" className="form__link-text"> Войти</Link>
      </p>
    </section>
  )
};

export default Register;
