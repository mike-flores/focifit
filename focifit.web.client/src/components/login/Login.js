import React from 'react';
import Card from '../common/Card';
import AccountService from '../../services/AccountService';
import { connect } from 'react-redux';
import { setLoggedIn } from '../../containers/actions';
import './login.css';

const mapStateToProps = state => {
   return {
      email: state.user.email
   };
};

const mapDispatchToProps = dispatch => {
   return {
      handleLogin: email => dispatch(setLoggedIn(email))
   };
};

class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         errorMessage: ''
      };
   }

   render() {
      return (
         <div className='login-initial'>
            <Card
               email={this.state.email}
               password={this.state.password}
               onChange={this.handleChange}
               onClick={this.handleClick}
               errorMessage={this.state.errorMessage}
            />
         </div>
      );
   }

   componentDidMount() {
      let root = document.querySelector('.login-initial');
       root.classList.add('login-fadein')
   }

   handleChange = event => {
      switch (event.target.id) {
         case 'email':
            this.setState({ email: event.target.value, errorMessage: '' });

            break;
         case 'password':
            this.setState({ password: event.target.value, errorMessage: '' });
            break;
         default:
            break;
      }
   };

   handleClick = event => {
      switch (event.target.id) {
         case 'login':
            AccountService.Login(this.state.email, this.handleAxiosSuccess, this.handleAxiosError);
            break;
         default:
            break;
      }
   };

   handleAxiosSuccess = response => {
      console.log('login success', response);
      if (response.data.Password === this.state.password) {
         this.props.handleLogin(this.state.email);
         this.props.history.push('/');
      } else {
         this.setState({ errorMessage: 'Invalid password.' });
         console.log('password doesnt match');
      }
   };

   handleAxiosError = error => {
      console.log(error.response);

      this.setState({ errorMessage: 'There is no account registered with this email.' });
   };
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Login);
