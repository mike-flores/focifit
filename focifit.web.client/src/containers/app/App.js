import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Content from '../content/Content';

const mapStateToProps = state => {
   return {
      loggedIn: state.user.loggedIn
   };
};
class App extends Component {
   render() {
      return (
         <div id="app" className="background-login" style={{ minHeight: '100vh' }}>
            <Header />
            <Content />
         </div>
      );
   }

   componentDidUpdate() {
      console.log('updated');
      this.toggleClass();
   }

   toggleClass = () => {
      var element = document.getElementById('app');
      element.classList.toggle('background-login');
      element.classList.toggle('background-dashboard');
   };
}

export default connect(mapStateToProps)(App);
