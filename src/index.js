import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import { GlobalSiconfonttyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <GlobalSiconfonttyle />
    <App />
  </Fragment>
  ,
  document.getElementById('root')
);