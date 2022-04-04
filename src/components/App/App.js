import './App.css';
import React from 'react';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login ';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
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
          <Movies/>
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
