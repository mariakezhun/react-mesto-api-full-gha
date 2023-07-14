import logoPaht from "../images/logo_white.svg";
import { Routes, Route, Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logoPaht} alt="Логотип" />
      <div className="header__navbar">
        <p className="header__email">{props.email}</p>
        <Routes>
          <Route
            path="/signin"
            element={
              <Link
                className="header__link"
                to="/signup"
              >
                Регистрация
              </Link>
            }
          />

          <Route
            path="/signup"
            element={
              <Link className="header__link" to="/signin">
                Войти
              </Link>
            }
          />

          <Route
            path="/"
            element={
              <Link
                className="header__link header__link_type_singout"
                onClick={props.onSignOut}
                to="/signin"
              >
                Выйти
              </Link>
            }
          />
        </Routes>
      </div>
    </header>
  );
}
