import React, {useState} from "react";
import './SearchForm.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import {ValidateSearch} from "../../utils/Validate";

function SearchForm ({setQuery, handleSubmitSearch}) {

  const { initialValues, validationSchema } = ValidateSearch

  const onSubmitSearch = (value) => {
    setQuery(value.search)
    handleSubmitSearch()
  }

  return (
    <section className='search'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitSearch}>
        {formik => {
          return (
            <Form>
              <div className='search__form'>
                <Field name='search'
                  className='search__input'
                  type='search'
                  placeholder='Фильм'/>
                <button type='submit' className={(formik.dirty && formik.isValid) ? 'search__input-button' : 'search__input-button search__input-button_disabled'} type='submit' disabled={!(formik.dirty && formik.isValid)}>Поиск
                </button>
              </div>
              <div id='name-error' className='form__text-error-search'>
                <ErrorMessage name='search'/>
              </div>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}

export default SearchForm;
