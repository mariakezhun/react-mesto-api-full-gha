export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.card.link && "popup_opened"}`}>
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img className="popup__img" src={props.card.link} alt={props.card.name} />
        <h2 className="popup__heading popup__heading_type_image">
          {props.card.name}
        </h2>
      </div>
    </div>
  );
}
