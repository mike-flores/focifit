import React from 'react';
import Input from './Input';
import './card.css';

const Card = props => {
   return (
      <div className="blog-card">
         <div className="title-content">
            <h3 id="login-h3">Login</h3>
            <hr className="card-hr" />
            <Input label="Email" type="email" id="email" onChange={props.onChange} />
            <Input label="Password" type="password" id="password" onChange={props.onChange} />
            <button style={{ marginTop: '20px' }} id="login" onClick={props.onClick}>
               Login
            </button>
            <div style={{paddingTop: '20px'}}>
               <h4 style={{color: 'red'}}>{props.errorMessage}</h4>
            </div>
         </div>
      </div>
      /*<!-- /.blog-card -->*/
   );
};

export default Card;
