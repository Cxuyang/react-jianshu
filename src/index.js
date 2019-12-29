import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import {GlobalStyled} from './statics/iconfont/iconfont';
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyled></GlobalStyled>
    <App />
  </Provider>,
  document.getElementById('root'));
