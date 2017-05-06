import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, hashHistory as appHistory} from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import store from './store';

import Dummy from './containers/dummy';

// const history = syncHistoryWithStore(appHistory, store);

window.addEventListener('DOMContentLoaded', () => {
  console.log('ReactDOM.render');
  render(
    <Provider store={store}>
      <Dummy />
    </Provider>,
    window.document.getElementById('root')
  );
});
