import React from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
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
    props.handleRegistrate( password, email );
  }

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h2 className="auth__header">Регистрация</h2>
        <input
          className="auth__input email"
          value={email}
          onChange={handleChangeEmail}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          required
          minLength="2"
          maxLength="200"
          autoComplete="email"
        />
        <span className="auth__error name-email"></span>
        <input
          className="auth__input password"
          value={password}
          onChange={handleChangePassword}
          name="password"
          id="password"
          type="password"
          placeholder="Пароль"
          required
          minLength="2"
          maxLength="200"
          autoComplete="password"
        />
        <span className="auth__error password-error"></span>
        <button className="auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <Link to="/signin" className="auth__link">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}
