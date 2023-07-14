import ImageStatusSuccess from '../images/image-status-succsess.png'
import ImageStatusFail from '../images/image-status-fail.png'

export default function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container popup__container_type_info">
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__img-info"
          src={
            props.statusTooltip
              ? ImageStatusSuccess
              : ImageStatusFail
          }
        />
        <h2 className="popup__heading popup__heading_type_info">
          {props.statusTooltip
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
}
