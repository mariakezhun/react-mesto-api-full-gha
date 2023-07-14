import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name, link });
  }

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <label className="popup__field">
        <input
          value={name}
          onChange={handleChangeName}
          className="popup__input popup__input_type_title"
          type="text"
          placeholder="Название"
          name="name"
          required
          minLength="2"
          maxLength="30"
          id="title"
        />
        <span className="popup__error title-error"></span>
      </label>
      <label className="popup__field">
        <input
          value={link}
          onChange={handleChangeLink}
          className="popup__input popup__input_type_link"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
          id="link"
        />
        <span className="popup__error link-error"></span>
      </label>
    </PopupWithForm>
  );
}
