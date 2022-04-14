import './App.css';
import React, {useEffect, useMemo, useState} from 'react';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login ';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { api } from '../../utils/MoviesApi';
import movies from "../Movies/Movies";

function App() {
  const [preloader, setPreloader] = useState(false)
  const [movies, setMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([])
  //Состояние чекбокса
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const updateMovies = (movies) => {
    setMovies(movies)
    localStorage.setItem('films', JSON.stringify(movies));
  }

  const updateFilterMovies = (movies) => {
    setFilterMovies(movies)
    localStorage.setItem('films_filter', JSON.stringify(movies))
  }

  // //Метод для чекбокса

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('films') || '[]');
    if(!movies.length) {
      api.getAllFilms()
      .then((res) => {
        updateMovies(res)
      })
    } else {
      setMovies(movies)
    }
  console.log(filteredMovies)
    const filteredMovies = JSON.parse(localStorage.getItem('films_filter') || '[]');
    if(movies.length) {
      setFilterMovies(filteredMovies)
    }
    setQuery(localStorage.getItem('query ') || '')

    // //Метод чекбокса
  },[]);


  const handleSubmitSearch = () => {
    if(query.length) {
      const  filteredMovies = movies.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(query) >= 0
      );
      updateFilterMovies(filteredMovies);
    }
  };

  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/signup'>
          <Register/>
        </Route>
        <Route path='/signin'>
          <Login/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/movies'>
          <Movies
            handleSubmitSearch={handleSubmitSearch}
            setQuery={setQuery}
            isLoading={isLoading}
            preloader={preloader}
            films={filterMovies}
          />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>
        <Route path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  )
}
export default App;


