import React, {useEffect, useState} from "react";
import './SearchForm.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import {ValidateSearch} from "../../utils/Validate";

function SearchForm ({ setQuery, handleSubmit, query}) {
  const { validationSchema } = ValidateSearch

  const onSubmitSearch = (values) => {
    setQuery(values.search);
    handleSubmit();
  }

  return (
    <section className='search'>
      <Formik
        initialValues={{search: query || ''}}
        validationSchema={validationSchema}
        onSubmit={onSubmitSearch}
        >
        {formik => {
          let isValid = formik.isValid;
          let values = formik.values.search.length === 0;
          return (
            <Form >
              <div className='search__form'>
                <Field name='search'
                  className='search__input'
                  type='search'
                />
                <button type='submit'
                        className={(isValid && !values) ? 'search__input-button' : 'search__input-button search__input-button_disabled'} type='submit'
                disabled={!(isValid && !values)}>
                  Поиск
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
