import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner === currentUser._id;

  const isLiked = props.card.likes.some(id => id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div id="card-template">
      <div className="element">
        {isOwn && (
          <button className="element__trash" onClick={handleDeleteClick} />
        )}
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleCardClick}
        />
        <div className="element__header-container">
          <h2 className="element__header">{props.card.name}</h2>
          <div className="element__like-container">
            <button
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
              type="button"
            ></button>
            <p className="element__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
