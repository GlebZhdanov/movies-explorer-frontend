import * as Yup from "yup";

export const ValidateLogin = {
  initialValues : {
    email: '',
    password: '',
  },
  onSubmit: (values) => {
    console.log(values)
  },
  validationSchema: Yup.object({
    email: Yup.string().email('Введи коректный email').required('Обязательное поле'),
    password: Yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Обязательное поле')
  })
};

export const ValidateRegister = {
  initialValues : {
    name: '',
    email: '',
    password: ''
  },
  onSubmit: (values) => {
    console.log(values)
  },
  validationSchema: Yup.object({
    name: Yup.string().min(2, 'Минимальная длина имени 2 символа').required('Обязательное поле'),
    email: Yup.string().email('Введи коректный email').required('Обязательное поле'),
    password: Yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Обязательное поле')
  })
};

export const ValidateSearch = {
  initialValues : {
    search: ''
  },
  validationSchema: Yup.object({
    search: Yup.string().required('Нужно ввести ключевое слово поле')
  })
};

export const ValidateLProfile = {
  initialValues : {
    name: '',
    email: '',
  },
  validationSchema: Yup.object({
    name: Yup.string().min(2, 'Минимальная длина имени 2 символа'),
    email: Yup.string().email('Введи коректный email'),
  })
};

