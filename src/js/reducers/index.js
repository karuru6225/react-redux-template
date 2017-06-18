import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux';

export default combineReducers({
  routing: routerReducer,
  intl: intlReducer
});
