import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../Register';
import Login from '../Login';

class Content extends React.Component {
   render() {
      return (
         <div style={{ border: '1px solid red', minHeight: '100vh' }}>
            <Switch>
               {/* <Route exact path="/" /> */}
               <Route exact path="/register" component={Register} />
               <Route exact path="/login" component={Login} />
            </Switch>
         </div>
      );
   }
}
export default Content;
