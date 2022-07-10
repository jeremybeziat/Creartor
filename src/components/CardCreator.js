import React from "react";

const CardCreator = (props) => {
  return (
    <figure className="card">
      <img className="card_img" src={props.src} alt={props.createur} />
      <figcaption className="card_figcaption">
        <img className="avatar_card" src={props.icone} alt={props.createur} />
        <p className="createur"><span className="span_createur"></span>{props.createur}</p>
        <div className="icon_card">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-message"></i>
        </div>
      </figcaption>
    </figure>
  );
};

export default CardCreator;