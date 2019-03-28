import React from 'react';
import './button.css';
const Button = props => {
   return (
      <div className="button-wrapper" id={props.id}onClick={props.onClick}>
         <button className="button-primary" >{props.children}</button>
      </div>
   );
};

export default Button;
