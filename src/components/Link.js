import React from "react";

const Link = (props) => {
  return (
    <a className={props.className} href={props.href}>{props.title}</a>
  );
}
export default Link;