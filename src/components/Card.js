import React from "react";

const Card = (props) => {
  return (
    <figure className="card">
      <img className="card_img" src={props.src} alt={props.alt} />
      <figcaption className="card_figcaption">
        <img className="avatar_card" src={props.icone} alt={props.createur} />
        <p className="createur"><span className="span_createur"></span>{props.createur}</p>
      </figcaption>
    </figure>
  );
};

export default Card;
