export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _chekRes(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(console.log(`Ошибка: ${res.status}`))
  }

  _getHeaders() {
    const jwt = localStorage.getItem("jwt");
    return {
      "Authorization" : jwt,
      'Content-Type' : 'application/json'
    }
  }

  registration({name, email, password}) {
    return fetch(this._url + "/signup", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    .then(this._chekRes)
  }

  authorization({password, email}) {
    return fetch(this._url + "/signin", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        password,
        email
      })
    })
    .then(this._chekRes)
  }

  chekToken() {
    return fetch(this._url + "/users/me", {
      method: "GET",
      headers: this._getHeaders(),
    })
    .then(this._chekRes)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._getHeaders()
    })
    .then(this._chekRes)
  }

  patchUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    })
    .then((res) => {
      return this._chekRes(res)
    })
  }

  postMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: data.country || 'null',
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN ? data.nameEN : data.nameRU,
      })
    })
    .then(this._chekRes)
  }

  getAllMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._getHeaders()
    })
    .then(this._chekRes)
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    })
    .then((res) => {
      return this._chekRes(res)
    })
  }
}

const api = new Api({
  url: 'http://localhost:3001',
  // url: "https://api.films.gleb.nomoredomains.work",
  headers: {
    "Content-Type": "application/json"
  }
})

export {api}
