class Auth {
  constructor({ BASE_URL }) {
    this._BASE_URL = BASE_URL;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(password, email) {
    return fetch(`${this._BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkResponse);
  }
  authorize({ password, email }) {
    return fetch(`${this._BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    })
    .then(this._checkResponse);
  }
  checkToken() {
    const token = localStorage.getItem('token');
    
    return fetch(`${this._BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }
}

export const auth = new Auth({ BASE_URL: "htts://mkezhun.back.nomoredomains.xyz" });