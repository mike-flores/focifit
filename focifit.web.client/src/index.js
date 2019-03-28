import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import { user } from './containers/reducers';
import App from './containers/app/App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import  { createLogger } from 'redux-logger';
//  import Input from './components/common/Input';

const logger = createLogger();
const rootReducer = combineReducers({ user });
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
