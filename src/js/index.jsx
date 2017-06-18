import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { addLocaleData } from 'react-intl';
import ja from 'react-intl/locale-data/ja';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import { Provider } from 'react-intl-redux';

import store from './store';

import Dummy1 from './containers/dummy1';
import Dummy2 from './containers/dummy2';

addLocaleData([...ja, ...en, ...zh]);

window.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path="/" component={Dummy1} exact />
          <Route path="/dummy" component={Dummy2} exact />
        </div>
      </HashRouter>
    </Provider>,
    window.document.getElementById('root')
  );
});
