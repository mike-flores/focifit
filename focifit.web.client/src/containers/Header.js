import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         loggingIn: false,
         signingUp: false
      };
   }
   render() {
      return (
         <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', textAlign: 'center' }}>
            <div>
               <button id="signup" onClick={this.handleClick}>
                  <NavLink to="/register">Register</NavLink>
               </button>
               <button id="login" onClick={this.handleClick}>
                  <NavLink to="/login">Login</NavLink>
               </button>
            </div>
         </div>
      );
   }

   handleClick = event => {
      switch (event.target.id) {
         case 'signup':
            if (this.state.loggingIn) this.setState({ loggingIn: false });
            this.state.signingUp ? this.setState({ signingUp: false }) : this.setState({ signingUp: true });
            break;
         case 'login':
            if (this.state.signingUp) this.setState({ signingUp: false });
            this.state.loggingIn ? this.setState({ loggingIn: false }) : this.setState({ loggingIn: true });
            break;
         default:
            break;
      }
   };
}
export default Header;
