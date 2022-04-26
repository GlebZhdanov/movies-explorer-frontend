import './App.css';
import React, { useEffect, useState } from 'react';
import Main from '../Main/Main';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import PageNotFound from '../PageNotFound/PageNotFound';
import {CurrentUserContext} from '../../context/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login ';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { apiMovies } from '../../utils/MoviesApi';
import {api} from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRouteVerification from "../ProtectedRouteVerification/ProtectedRouteVerification";

function App() {
  const [preloader, setPreloader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [saveMovies, setSaveMovies] = useState([])
  const [currentUser, setCurrentUser] = React.useState({});
  const [short, setShort] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [querySaveFilms, setQuerySaveFilms] = useState('')
  const [loginVerification, setLoginVerification] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isInfoTooltipPopupTitle, setIsInfoTooltipPopupTitle] = useState('');
  const [isInfoTooltipPopupSuccess, setIsInfoTooltipPopupSuccess] = useState(false);

  const closePopup = () => {
    setIsInfoTooltipPopupOpen(false)
  }

  const openPopupError = (textTitle)  => {
    setIsInfoTooltipPopupOpen(true);
    setIsInfoTooltipPopupTitle(textTitle);
  }

  const openPopupSuccess = (textTitle)  => {
    setIsInfoTooltipPopupOpen(true);
    setIsInfoTooltipPopupSuccess(true)
    setIsInfoTooltipPopupTitle(textTitle);
  }

  let history = useHistory();

  let location = useLocation();

  //Блок логики пользователя

  React.useEffect(() => {
    if(localStorage.getItem('jwt') !== null) {
      setPreloader(true)
      Promise.all([api.getUserInfo(), api.getAllMovies()])
      .then(([dataInfoUser, dataInfoMovies]) => {
        setCurrentUser(dataInfoUser);
        updateMoviesSave(dataInfoMovies);
      })
      .catch((err) => console.log("ошибка получения данных: " + err))
      .finally(() => setPreloader(false))
    }
  }, [loginVerification]);

  const handleRegister = (name, email, password) => {
    setPreloader(true)
    api.registration({
      name: name,
      email: email,
      password: password
    })
    .then(() => {
      openPopupSuccess('Вы успешно зарегистрировались');
      handleLogin(email, password);
    })
    .catch((err) => {
      openPopupError("Произошла ошибка регистрации")})
    .finally(() => setPreloader(false))
  }

  const handleLogin = (email, password) => {
    setPreloader(true)
    api.authorization({
      email: email,
      password: password
    })
    .then((data) => {
      if (data.message) {
        localStorage.setItem('jwt', data.message);
        setLoginVerification(true);
        history.push('/movies')
      } else {
        setLoginVerification(false);
      }
    })
    .catch((err) => {
      openPopupError('Что-то пошло не так')})
    .finally(() => setPreloader(false))
  }

  const handlePatchUserInfo = (data) => {
    setPreloader(true)
    api.patchUserInfo(data)
    .then((data) => {
      setCurrentUser(data);
      setIsInfoTooltipPopupSuccess(true);
      openPopupSuccess('Данные были изменены')
    })
    .catch((err) => {
      openPopupError('Произошла ошибка редактирования данных пользователя')})
    .finally(() => setPreloader(false))
  }

  const logoutLogin = () => {
    setLoginVerification(false);
    history.push('/');
    localStorage.clear()
    setMovies([]);
    setLoginVerification(false);
    window.location.reload();
  }

  const handleChekToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.chekToken()
      .then((res) => {
        if (res) {
          setLoginVerification(true)
        }
      })
      .catch((err) => {
        localStorage.removeItem('jwt');
        setLoginVerification(false)
        console.log("ошибка проверки токена: " + err)})
    } else {
      setLoginVerification(false)
    }
  }

  useEffect(() => {
      handleChekToken()
  },[])

  //Блок логики работы с фильмами

  const checkLikeStatus = (movie) => {
      return saveMovies.some(
        (i) => i.owner === currentUser._id && i.movieId === movie.id
      );
    return false;
  }

  const handleMovieSaveDelete = (movie) => {
    const movieDelete = saveMovies.find((i) => i.movieId === movie.id);
    api
    .deleteMovie(movieDelete._id)
    .then((res) => {
      const savedMovies = saveMovies.filter(
        (i) => i.movieId !== movie.id
      );
      updateMoviesSave(savedMovies)
    })
    .catch((err) => {
      openPopupError('Что-то пошло не так')
      console.log(err)
    });
  }

  const handleSavedMovie = (movies) => {
    api
    .postMovie(movies)
    .then((dataCard) => {
      updateMoviesSave([dataCard, ...saveMovies]);
    })
    .catch((err) => {
      openPopupError('Что-то пошло не так')
    });
  }

  const handleMovieDelete = (id) => {
    api.deleteMovie(id)
    .then(() => {
      const savedMovies = saveMovies.filter((film) => id !== film._id);
      updateMoviesSave(savedMovies)
    })
    .catch((err) => console.log("ошибка удаленения карточки: " + err))
  }

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
    localStorage.setItem('saved_movies', JSON.stringify(movies))
    setSaveMovies(movies);
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
    if (!movies.length) {
      setPreloader(true)
      apiMovies.getAllFilms()
      .then((res) => {
        updateMovies(res)
      })
      .catch((err) => {
        openPopupError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
      .finally(() => setPreloader(false))
    }

    const filteredMovies = JSON.parse(localStorage.getItem('films_filter') || '[]');
    setFilterMovies(filteredMovies)

    updateQuery(localStorage.getItem('query') || '');

    updateShort(JSON.parse(localStorage.getItem('short') || 'false'));
  },[]);

  useEffect(() => {
    handleSubmitSearch()
    handleSubmitSearchSave()
  },[query])

  const handleSubmitSearch = () => {
    if(query.length) {
      const filteredMovies = movies.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(query) >= 0
      );
      updateFilterMovies(filteredMovies);
    }
  };

  const handleSubmitSearchSave = () => {
    if(querySaveFilms.length) {
      saveMovies.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(querySaveFilms) >= 0
      );
    }
  };

  useEffect(() => {
    setQuerySaveFilms('')
  },[location])

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <Preloader preloader={preloader} />
          <Switch>
            <Route exact path='/'>
              <Main loginVerification={loginVerification}/>
            </Route>
            <Route path='/signup'>
              <ProtectedRouteVerification loginVerification={loginVerification}>
                <Register handleRegister={handleRegister}/>
              </ProtectedRouteVerification>
            </Route>
            <Route path='/signin'>
              <ProtectedRouteVerification loginVerification={loginVerification}>
                <Login handleLogin={handleLogin}/>
              </ProtectedRouteVerification>
            </Route>
            <Route path='/profile'>
              <ProtectedRoute loginVerification={loginVerification}>
              <Profile
                logoutLogin={logoutLogin}
                handlePatchUserInfo={handlePatchUserInfo}/>
              </ProtectedRoute>
            </Route>
            <Route path='/movies'>
              <ProtectedRoute loginVerification={loginVerification}>
                <Movies
                  handleSavedMovie={handleSavedMovie}
                  isShort={short}
                  short={updateShort}
                  query={query}
                  handleSubmitSearch={handleSubmitSearch}
                  setQuery={updateQuery}
                  films={filterMovies}
                  isLoading={isLoading}
                  handleMovieSaveDelete={handleMovieSaveDelete}
                  handleMovieDelete={handleMovieDelete}
                  checkLikeStatus={checkLikeStatus}
                  />
              </ProtectedRoute>
            </Route>
            <Route path='/saved-movies'>
              <ProtectedRoute loginVerification={loginVerification}>
                <SavedMovies
                  short={updateShort}
                  isShort={short}
                  setQuery={setQuerySaveFilms}
                  handleMovieDelete={handleMovieDelete}
                  saveMovies={saveMovies}
                  checkLikeStatus={checkLikeStatus}
                  handleSubmitSearch={handleSubmitSearchSave}
                  querySaveFilms={querySaveFilms}
                />
              </ProtectedRoute>
            </Route>
            <Route path='*'>
              <PageNotFound/>
            </Route>
          </Switch>
        <InfoTooltip
          textTitle={isInfoTooltipPopupTitle}
          isOpenPopup={isInfoTooltipPopupOpen}
          isSuccess={isInfoTooltipPopupSuccess}
          isClosePopup={closePopup}
          setPopupOpen={setIsInfoTooltipPopupOpen}
        />

      </CurrentUserContext.Provider>
  )
}
export default App;
