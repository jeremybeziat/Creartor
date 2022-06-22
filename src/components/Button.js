// import React from "react";

// class Button extends React.Component {
//   render() {
//     return <button className="button">{this.props.title}</button>;
//   }
// }
// export default Button;

function Button(props) {
  return <button className="button">{props.title}</button>;
}
export default Button;

