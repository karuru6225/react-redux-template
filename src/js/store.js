import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import messages from 'locales/messages';
import rootSaga from 'sagas/index';
import reducers from 'reducers/index';

const sagaMiddleare = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default (() => {
  const store = createStore(
    reducers,
    {
      intl: {
        locale: 'en',
        messages: messages.en
      }
    },
    composer(
      applyMiddleware(
        sagaMiddleare,
      )
    )
  );
  sagaMiddleare.run(rootSaga);
  return store;
})();
