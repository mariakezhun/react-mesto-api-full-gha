class Api {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/cards`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  addCards({ name, link }) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, link }),
    }).then(this._checkResponse);
  }

  deleteCards(_id) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  getUserInfo() {
    const token = localStorage.getItem('token');
    return fetch(`${this._url}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  addUserInfo(data) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: data.name, about: data.about }),
    }).then(this._checkResponse);
  }

  editAvatar(data) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ avatar: data.avatar }),
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(_id, isLiked) {
    const token = localStorage.getItem('token');

    return fetch(`${this._url}/cards/${_id}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  url: 'https://mkezhun.back.nomoredomains.xyz',
});
