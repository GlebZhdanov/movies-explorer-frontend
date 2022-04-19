import './App.css';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Main from '../Main/Main';
import { Switch, Route, useHistory, Redirect} from 'react-router-dom'
import PageNotFound from '../PageNotFound/PageNotFound';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login ';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { api } from '../../utils/MoviesApi';
import {auth} from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [preloader, setPreloader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([])
  const [currentUser, setCurrentUser] = React.useState({});
  const [short, setShort] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [loginVerification, setLoginVerification] = React.useState(false);

  let history = useHistory();

  //Блок логики с API

  React.useEffect(() => {
    if(loginVerification === true) {
      history.push('/movies')
      Promise.all([auth.getUserInfo(), auth.getAllMovies()])
      .then(([dataInfoUser, dataInfoMovies]) => {
        setCurrentUser(dataInfoUser);
        setSaveMovies(dataInfoMovies);
      })
      .catch((err) => console.log("ошибка получения данных: " + err))
    }

  }, [loginVerification]);

  // React.useEffect(() => {
  //   if(loginVerification === true) {
  //     history.push('/movies')
  //     auth.getUserInfo()
  //     .then((dataInfoUser) => {
  //       setCurrentUser(dataInfoUser);
  //       setLoginVerification(true)
  //     })
  //     .catch((err) => console.log("ошибка получения данных: " + err))
  //   }
  // }, [loginVerification]);

  function handleRegister(name, email, password) {
    auth.registration({
      name: name,
      email: email,
      password: password
    })
    .then(() => {
      history.push('/signin')
      // setVerification(true);
    })
    .catch((err) => {
      // setVerification(false);
      console.log("ошибка регистрации пользователя: " + err)})
    .finally(() => {
      // switchInfoTooltipPopup();
    })
  }

  function handleLogin(email, password) {
    auth.authorization({
      email: email,
      password: password
    })
    .then((data) => {
      if (data.message) {
        localStorage.setItem('jwt', data.message);
        setLoginVerification(true);
        history.push('/movies')
        // setLoginVerification(true);
      } else {
        setLoginVerification(false);
      }
    })
    .catch((err) => {
      // setVerification(false);
      // switchInfoTooltipPopup();
      console.log("ошибка авторизации пользователя: " + err)})
  }

  function handlePatchUserInfo(data) {
    auth.patchUserInfo(data)
    .then((data) => {
      setCurrentUser(data)
    })
    .catch((err) => console.log("ошибка данных пользователя: " + err))
  }

  function logoutLogin() {
    setLoginVerification(false);
    history.push('/signin');
    localStorage.removeItem('jwt');
  }

  function handleChekToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.chekToken()
      .then((res) => {
        if (res) {
          setLoginVerification(true)
        }
      })
      .catch((err) => {
        localStorage.removeItem('jwt');
        setLoginVerification(false)
        console.log("ошибка проверки токена: " + err)})
    }
  }

  useEffect(() => {
      handleChekToken()
  },[])

  function handleSavedMovie(movies) {
    auth
    .postMovie(movies)
    .then((dataCard) => {
      // const NewSavedMovies = [res.movie, ...savedMovies];
      updateMoviesSave(dataCard);
      localStorage.setItem('savedMovies', JSON.stringify(saveMovies));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  //Блок логики с фильмами
  const updateMovies = (movies) => {
    setMovies(movies)
    localStorage.setItem('films', JSON.stringify(movies));
  }

  const updateFilterMovies = (movies) => {
    localStorage.setItem('films_filter', JSON.stringify(movies))
    setFilterMovies(movies);
    setIsLoading(false)
  }

  const updateMoviesSave = (movies) => {
    localStorage.setItem('savedMovies', JSON.stringify(movies))
    setSaveMovies(movies);
    // setIsLoading(false)
  }

  const updateQuery = (query) => {
    localStorage.setItem('query', (query));
    setQuery(query)
  }

  const updateShort = (short) => {
    setShort(short);
    localStorage.setItem('short', JSON.stringify(short));
  }

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('films') || '[]');
    setMovies(movies);
    if(!movies.length) {
      api.getAllFilms()
      .then((res) => {
        updateMovies(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    const filteredMovies = JSON.parse(localStorage.getItem('films_filter') || '[]');
    setFilterMovies(filteredMovies)

    updateQuery(localStorage.getItem('query') || '');

    updateShort(JSON.parse(localStorage.getItem('short') || 'false'));
  },[]);

  useEffect(() => {
    handleSubmitSearch()
  },[query])

  const handleSubmitSearch = () => {
    if(query.length) {
      const filteredMovies = movies.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(query) >= 0
      );
      updateFilterMovies(filteredMovies);
    }
  };

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route exact path='/'>
              <Main/>
            </Route>
            <Route path='/signup'>
              <Register
                handleRegister={handleRegister}/>
            </Route>
            <Route path='/signin'>
              <Login
                handleLogin={handleLogin}/>
            </Route>
            <ProtectedRoute
              path='/profile'
              component={Profile}
              loginVerification={loginVerification}
              logoutLogin={logoutLogin}
              handlePatchUserInfo={handlePatchUserInfo}/>
            <ProtectedRoute
              path='/movies'
              handleSavedMovie={handleSavedMovie}
              component={Movies}
              loginVerification={loginVerification}
              isShort={short}
              short={updateShort}
              query={query}
              handleSubmitSearch={handleSubmitSearch}
              setQuery={updateQuery}
              preloader={preloader}
              films={filterMovies}
              isLoading={isLoading}/>
            {/*<Route path='/movies'>*/}
            {/*    <Movies*/}
            {/*      isShort={short}*/}
            {/*      short={updateShort}*/}
            {/*      query={query}*/}
            {/*      handleSubmitSearch={handleSubmitSearch}*/}
            {/*      setQuery={updateQuery}*/}
            {/*      preloader={preloader}*/}
            {/*      films={filterMovies}*/}
            {/*      isLoading={isLoading}*/}
            {/*    />*/}
            {/*  </Route>*/}
            {/*  <Route path='/saved-movies'>*/}
            {/*    <SavedMovies />*/}
            {/*  </Route>*/}
            <Route path='*'>
              <PageNotFound/>
            </Route>
          </Switch>
      </CurrentUserContext.Provider>
  )
}
export default App;
