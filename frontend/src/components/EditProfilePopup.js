import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function handleChangeUserName(e) {
    setName(e.target.value);
  }

  function handleChangeUserDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="profile"
      buttonText="Сохранить"
    >
      <label className="popup__field">
        <input
          onChange={handleChangeUserName}
          value={name}
          className="popup__input popup__input_type_name"
          type="text"
          placeholder="Имя"
          name="name"
          required
          minLength="2"
          maxLength="40"
          id="name"
        />
        <span className="popup__error name-error"></span>
      </label>
      <label className="popup__field">
        <input
          onChange={handleChangeUserDescription}
          value={description}
          className="popup__input popup__input_type_job"
          type="text"
          placeholder="О себе"
          name="about"
          required
          minLength="2"
          maxLength="200"
          id="about"
        />
        <span className="popup__error about-error"></span>
      </label>
    </PopupWithForm>
  );
}
