import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'react-router-redux';
// import { hashHistory } from 'react-router';
import rootSaga from './sagas/index';
import reducers from './reducers/index';

const sagaMiddleare = createSagaMiddleware();

export default (() => {
  const store = createStore(
    reducers,
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
    compose(
      applyMiddleware(
        sagaMiddleare,
        /*routerMiddleware(hashHistory)*/
      )
    )
  );
  sagaMiddleare.run(rootSaga);
  return store;
})();
