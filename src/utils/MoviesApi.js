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

  getAllFilms() {
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers
    })
    .then(res => {
      return this._chekRes(res)
    })
  }
}

const api = new Api({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type' : 'application/json'
  }
})

export { api }
