import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './content.css';
import Register from '../../components/register/Register';
import Login from '../../components/login/Login';
import Training from '../../components/training/Training';
class Content extends React.Component {
   render() {
      return (
         <div style={{ margin: 'auto' }}>
            <Switch>
               <Route exact path="/" />
               <Route exact path="/register" component={Register} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/training" component={Training} />
            </Switch>
         </div>
      );
   }
}
export default Content;
