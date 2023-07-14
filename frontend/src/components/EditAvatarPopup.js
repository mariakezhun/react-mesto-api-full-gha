import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <label className="popup__field">
        <input
          ref={avatarRef}
          className="popup__input popup__input_type_link"
          type="url"
          placeholder="Ссылка на аватарку"
          name="avatar"
          required
          id="avatar-link"
        />
        <span className="popup__error avatar-link-error"></span>
      </label>
    </PopupWithForm>
  );
}
