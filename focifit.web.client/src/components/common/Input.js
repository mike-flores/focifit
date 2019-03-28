import React from 'react';
import './input.css';
const Input = props => {
   return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
         <label className="field a-field a-field_a1 page__field">
            <input
               id={props.id}
               className="field__input a-field__input"
               type={props.type}
               value={props.password}
               onChange={props.onChange}
               placeholder=" "
               required
            />
            <span className="a-field__label-wrap">
               <span className="a-field__label">{props.label}</span>
            </span>
         </label>
      </div>
   );
};
export default Input;
