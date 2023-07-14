import React from "react";

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin({ email, password });
  }

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="auth__header">Вход</h2>
        <input
          className="auth__input"
          value={email}
          onChange={handleChangeEmail}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="auth__error name-email"></span>
        <input
          className="auth__input"
          value={password}
          onChange={handleChangePassword}
          name="password"
          id="password"
          type="password"
          placeholder="Пароль"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="auth__error password-error"></span>
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
