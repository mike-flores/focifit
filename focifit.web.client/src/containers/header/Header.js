import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../actions';
import Button from '../../components/common/Button';

const mapStateToProps = state => {
   return {
      loggedIn: state.user.loggedIn
   };
};

const mapDispatchToProps = dispatch => {
   return {
      handleLogIn: () => dispatch(setLoggedIn()),
      handleLogOut: () => dispatch(setLoggedOut())
   };
};
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
         <div>
            {this.props.loggedIn ? (
               //Logged in render
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     justifyContent: 'space-between'
                     // textAlign: 'right'
                  }}
               >
                  <h4>FociFit</h4>
                  <div
                     style={{
                        display: 'flex',
                        flexDirection: 'row',
                        textAlign: 'center'
                     }}
                  >
                     <NavLink
                        className="navlink-wrapper"
                        style={{ margin: '0px 10px', color: 'white', textDecoration: 'none' }}
                        to="/training"
                     >
                        <Button id="signup" onClick={this.handleClick}>
                           Training
                        </Button>
                     </NavLink>
                     <NavLink
                        className="navlink-wrapper"
                        style={{ margin: '0px 10px', color: 'white', textDecoration: 'none' }}
                        to="/register"
                     >
                        <Button id="signup" onClick={this.handleClick}>
                           Articles
                        </Button>
                     </NavLink>
                     <NavLink
                        className="navlink-wrapper"
                        style={{ margin: '0px 10px', color: 'white', textDecoration: 'none' }}
                        to="/register"
                     >
                        <Button  id="signup" onClick={this.handleClick}>
                           Tools
                        </Button>
                     </NavLink>
                  </div>
                  <NavLink
                     className="navlink-wrapper"
                     style={{ margin: '0px 10px', color: 'white', textDecoration: 'none' }}
                     id="logout"
                     to="/logout"
                  >
                     <Button  id="logout" onClick={this.handleClick}>
                        Logout
                     </Button>
                  </NavLink>
               </div>
            ) : (
               //Not logged in render
               <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'center', justifyContent: 'center' }}>
                  <NavLink
                     className="navlink-wrapper"
                     style={{ margin: '0px 10px', color: 'white', textDecoration: 'none' }}
                     to="/register"
                  >
                     <Button  id="signup" onClick={this.handleClick}>
                        Register
                     </Button>
                  </NavLink>
                  <NavLink
                     className="navlink-wrapper"
                     style={{ margin: '0px 10px', color: 'white', textDecoration: 'none' }}
                     id="login"
                     to="/login"
                  >
                     <Button id="login" onClick={this.handleClick}>
                        Login
                     </Button>
                  </NavLink>
               </div>
            )}
         </div>
      );
   }

   handleClick = event => {
      console.log(event.target.id);
      console.log('clickeed');
      switch (event.target.id) {
         case 'signup':
            if (this.state.loggingIn) this.setState({ loggingIn: false });
            this.state.signingUp ? this.setState({ signingUp: false }) : this.setState({ signingUp: true });
            break;
         case 'login':
            // this.props.handleLogIn();
            if (this.state.signingUp) this.setState({ signingUp: false });
            this.state.loggingIn ? this.setState({ loggingIn: false }) : this.setState({ loggingIn: true });
            break;
         default:
            break;
         case 'logout':
            this.props.handleLogOut();
      }
   };
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Header);
