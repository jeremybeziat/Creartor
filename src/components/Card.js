import React from "react";

const Card = (props) => {
  return (
    <figure className="card">
      <img className="card_img" src={props.src} alt={props.alt} />
      <figcaption className="card_figcaption">
        <img className="avatar_card" src={props.icone} alt={props.creator} />
        {props.title}
        {/* <div className="icon_card">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-message"></i>
        </div> */}
      </figcaption>
    </figure>
  );
};

export default Card;
